let React = window.React
let ReactDOM = window.ReactDOM
let {createRoot} = window.ReactDOM
var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }

    return target;
};
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
        }
    }

    return target;
};
var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var VUE_COMPONENT_NAME = 'vuera-internal-component-name';  
var wrapReactChildren = function wrapReactChildren(createElement, children) {
    return createElement('vuera-internal-react-wrapper', {
        props: {
        component: function component() {
            return React.createElement(
            'div',
            null,
            children
            );
        }
        }
    });
};
var defineProperty = function (obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
        });
    } else {
        obj[key] = value;
    }

    return obj;
};
var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var VueContainer = function (_React$Component) {
    inherits(VueContainer, _React$Component);

    function VueContainer(props) {
        classCallCheck(this, VueContainer);

        /**
         * We have to track the current Vue component so that we can reliably catch updates to the
         * `component` prop.
         */
        var _this = possibleConstructorReturn(this, (VueContainer.__proto__ || Object.getPrototypeOf(VueContainer)).call(this, props));

        _this.currentVueComponent = props.component;

        /**
         * Modify createVueInstance function to pass this binding correctly. Doing this in the
         * constructor to avoid instantiating functions in render.
         */
        var createVueInstance = _this.createVueInstance;
        var self = _this;
        _this.createVueInstance = function (element, component, prevComponent) {
        createVueInstance(element, self, component, prevComponent);
        };
        return _this;
    }

    createClass(VueContainer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
        var component = nextProps.component,
            props = objectWithoutProperties(nextProps, ['component']);


        if (this.currentVueComponent !== component) {
            this.updateVueComponent(this.props.component, component);
        }
        /**
         * NOTE: we're not comparing this.props and nextProps here, because I didn't want to write a
         * function for deep object comparison. I don't know if this hurts performance a lot, maybe
         * we do need to compare those objects.
         */
        Object.assign(this.vueInstance.$data, props);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
        this.vueInstance.$destroy();
        }

        /**
         * Creates and mounts the Vue instance.
         * NOTE: since we need to access the current instance of VueContainer, as well as the Vue instance
         * inside of the Vue constructor, we cannot bind this function to VueContainer, and we need to
         * pass VueContainer's binding explicitly.
         * @param {HTMLElement} targetElement - element to attact the Vue instance to
         * @param {ReactInstance} reactThisBinding - current instance of VueContainer
         */

    }, {
        key: 'createVueInstance',
        value: function createVueInstance(targetElement, reactThisBinding) {
        var _components;

        var _reactThisBinding$pro = reactThisBinding.props,
            component = _reactThisBinding$pro.component,
            on = _reactThisBinding$pro.on,
            props = objectWithoutProperties(_reactThisBinding$pro, ['component', 'on']);

        // `this` refers to Vue instance in the constructor

        reactThisBinding.vueInstance = new window.Vue(_extends({
            el: targetElement,
            data: props
        }, window.Vue.config.vueInstanceOptions, {
            render: function render(createElement) {
            return createElement(VUE_COMPONENT_NAME, {
                props: this.$data,
                on: on
            }, [wrapReactChildren(createElement, this.children)]);
            },
            components: (_components = {}, defineProperty(_components, VUE_COMPONENT_NAME, component), defineProperty(_components, 'vuera-internal-react-wrapper', ReactVueWrapper), _components)
        }));
        }
    }, {
        key: 'updateVueComponent',
        value: function updateVueComponent(prevComponent, nextComponent) {
        this.currentVueComponent = nextComponent;

        /**
         * Replace the component in the Vue instance and update it.
         */
        this.vueInstance.$options.components[VUE_COMPONENT_NAME] = nextComponent;
        this.vueInstance.$forceUpdate();
        }
    }, {
        key: 'render',
        value: function render() {
        return React.createElement('div', { ref: this.createVueInstance });
        }
    }]);
    return VueContainer;
}(React.Component);
var possibleConstructorReturn = function (self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
var makeReactContainer = function makeReactContainer(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        inherits(ReactInVue, _React$Component);

        function ReactInVue(props) {
        classCallCheck(this, ReactInVue);

        /**
         * We create a stateful component in order to attach a ref on it. We will use that ref to
         * update component's state, which seems better than re-rendering the whole thing with
         * ReactDOM.
         */
        var _this = possibleConstructorReturn(this, (ReactInVue.__proto__ || Object.getPrototypeOf(ReactInVue)).call(this, props));

        _this.state = _extends({}, props);
        return _this;
        }

        createClass(ReactInVue, [{
        key: 'wrapVueChildren',
        value: function wrapVueChildren(children) {
            return {
            render: function render(createElement) {
                return createElement('div', children);
            }
            };
        }
        }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                children = _state.children,
                _invoker = _state[''],
                rest = objectWithoutProperties(_state, ['children', '']);

            var wrappedChildren = this.wrapVueChildren(children);

            return React.createElement(
            Component,
            rest,
            children && React.createElement(VueContainer, { component: wrappedChildren })
            );
        }
        }]);
        return ReactInVue;
    }(React.Component), _class.displayName = 'ReactInVue' + (Component.displayName || Component.name || 'Component'), _temp;
};
let count = 0;
let classNameTag = 'thub-react-in-vue';
var _this2 = null;
export default function ReactVueWrapper(){
    return {
        props: ['component', 'passedProps', 'thub_slots'],
        data() {
            return {
                _root: 0,
                thub_slots: 0,
                reactComponentRef : 0,
            }
        },
        render: function render(createElement) {
            let e = createElement
            
            count++
            return e('div', { 
                ref: 'react', 
                class: `${classNameTag}-${count}` 
            });
        },
        created() {
            this.$watch('reactComponentRef', (newRef) => {
                newRef.setState({ children: this.thub_slots })
            })
        },
        methods: {
            mountReactComponent: function mountReactComponent(component, cus_slots = null) {
                _this2 = this;
                var Component = makeReactContainer(component);
                _this2._root = createRoot(this.$refs.react);
                var children = this.$slots.default !== undefined || cus_slots !== null ? { children: this.$slots.default || cus_slots} : {};
                _this2._root.render(React.createElement(Component, _extends({}, this.$props.passedProps, this.$attrs, this.$listeners, children, {
                    ref: function ref(_ref) {
                        return _this2.reactComponentRef = _ref;
                    }
                })));
            },
            getRef: function getRef(){
                return _this2.reactComponentRef
            }
        },
        mounted: function mounted() {
            if (this.$props.thub_slots) {
                this.mountReactComponent(this.$props.component,this.$props.thub_slots);
            }else{
                this.mountReactComponent(this.$props.component);
            }
        },
        beforeDestroy: function beforeDestroy() {
            _this2._root.unmount();
        },
        updated: function updated() {
            /**
             * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
             * `$slots` or `$children`.
             */
            if (this.$slots.default !== undefined) {
            _this2.reactComponentRef.setState({ children: this.$slots.default });
            } else {
            _this2.reactComponentRef.setState({ children: null });
            }
        },
        inheritAttrs: true,
        watch: {
            $attrs: {
                handler: function handler() {
                    if (_this2.reactComponentRef) {
                        _this2.reactComponentRef.setState(_extends({}, this.$attrs));
                    }
                },

                deep: true
            },
            '$props.component': {
                handler: function handler(newValue) {
                    this.mountReactComponent(newValue);
                }
            },
            $listeners: {
                handler: function handler() {
                    _this2.reactComponentRef.setState(_extends({}, this.$listeners));
                },

                deep: true
            },
            '$props.passedProps': {
                handler: function handler() {
                    _this2.reactComponentRef.setState(_extends({}, this.$props.passedProps));
                },
                deep: true
            },
            '$props.thub_slots': {
                handler: function handler(newValue) {
                    _this2.thub_slots = newValue
                // console.log(this.reactComponentRef)
                },
                deep: true
            }
        },
        // componentDidMount: function
    }
} 
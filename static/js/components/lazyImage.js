export const LazyImage = {
    template: `
    <div class="lazy-image">
        <div class=" theme--light v-image v-responsive z-1">
            <div class="v-responsive__sizer" style="padding-bottom: 67.1246%;"></div>
            <div class="lazy-image-preview v-image__image v-image__image--cover" :style="imagePreview"></div>
            <div class="v-responsive__content" style="width: 1019px;">
                <slot></slot>
            </div>
        </div>
		<v-img
			class="lazy-image-full"
			ref="src"
			:class="{
				'lazy-image-full-loaded': imageLoaded
			}"
			:src="src"
		>
		</v-img>
	</div>
    `,
    props: [
        'src',
        'previewSrc'
    ],
    data() {
        return {
            image: null,
            imageLoaded: false,
            width: 0,
            height: 0,
            imagePreview: `background-image: url(${this.previewSrc}); background-position: center center;`
        };
    },
    mounted(){
			this.image = new Image();
			this.image.src = this.src;
			
			this.image.onload = () => {
				this.imageLoaded = true;
				this.$refs.src = this.src
			};
    }
};
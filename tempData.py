import random
import string


def tempData():
    tabItems = [
        'Trending', 'Events', 'Videos', 'Blogs','Live Stream',
    ]
    
    moreTabItems = [
        'News', 'Maps', 'Books', 'Flights', 'Apps','Shopping','IOT',
    ]
    
    def cardComment(key):
        return [
                {
                    'key': key + '-comment',
                    'userName': "Mescudi",
                    'timePosted': "Just now",
                    'profilePhoto': "https://media.timeout.com/images/105653190/image.jpg",
                    'comment': "It's a Akrapovic exhaust!!! Follow them for info 😎"
                },
                {
                    'key': key + '-comment',
                    'userName': "Wes",
                    'timePosted': "3 mins ago",
                    'profilePhoto':
                        "https://yeezymafia.com/content/images/2019/08/Kanye-West-adidas-Yeezy-Basketball-Shoe-YZY-BSKTBL.png",
                    'comment': "Love the color, whats the color code!"
                },
                {
                    'key': key + '-comment',
                    'userName': "traviScott",
                    'timePosted': "48 mins ago",
                    'profilePhoto':
                        "https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ.jpg",
                    'comment': "💘💗💚💕🖤"
                },
                {
                    'key': key + '-comment',
                    'userName': "mr305",
                    'timePosted': "2hrs ago",
                    'profilePhoto':
                        "https://www.extremecustoms.com/inc.store/images/gallery/2008-gmc-sierra-2500-hd-with-leveling-kit-gear-alloy-big-block-726mb-22x12--44-offset-22-by-12-inch-wide-wheel-toyo-proxes-st-305-40r22-tire-pic4.jpg",
                    'comment': "I need one right now"
                },
                {
                    'key': key + '-comment',
                    'userName': "its50",
                    'timePosted': "Just now",
                    'profilePhoto':
                        "https://media.npr.org/assets/music/sotd/2009/11/50cent-606653ff4067b3c2488559211d4adddf497a103b-s800-c85.jpg",
                    'comment': "What wheels are those?"
                },
                {
                    'key': key + '-comment',
                    'userName': "ciciFlores",
                    'timePosted': "12 mins ago",
                    'profilePhoto':
                        "https://post.healthline.com/wp-content/uploads/2021/06/1336289-The-10-Best-Self-Help-Books-for-Women-in-2021-732x549-Feature.jpg",
                    'comment': "WOW love the wheel set up"
                },
                {
                    'key': key + '-comment',
                    'userName': "boldJet",
                    'timePosted': "1 day ago",
                    'profilePhoto':
                        "https://worldarchery.sport/sites/default/files/styles/header_desktop/https/photos.smugmug.com/OLYMPIC-GAMES/TOKYO-2020/23-JULY-QUALIFICATION/i-K2L7PfT/0/125fcb9f/X3/X21_7255-X3.jpg?h=2e8ccfe0&itok=fkr_S58k",
                    'comment': "Nice !!!"
                },
                {
                    'key': key + '-comment',
                    'userName': "nikeHead32",
                    'timePosted': "3 mins ago",
                    'profilePhoto':
                        "https://static.nike.com/a/images/f_auto/dpr_3.0/h_500,c_limit/a95ae79b-df88-4b50-86d2-a1c046a81033/nike-air-max-air-max-day-2020.jpg",
                    'comment': "Omw! 🤐😅"
                },
                {
                    'key': key + '-comment',
                    'userName': "kidCudi",
                    'timePosted': "Just now",
                    'profilePhoto':
                        "https://media.pitchfork.com/photos/5dbb9348892ad400095d279c/4:3/w_1912,h_1434,c_limit/Kid-Cudi.jpg",
                    'comment': "Buyn one tomorrow for my show!"
                },
                {
                    'key': key + '-comment',
                    'userName': "KanyeW213",
                    'timePosted': "8/13/21",
                    'profilePhoto':
                        "https://cdn.vox-cdn.com/thumbor/db1ZWaAzB_kNVvTzFFkSGlC7t3k=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20055434/kanye_west_kid_cudi_kids_see_ghosts_review.jpg",
                    'comment': "Thats crazy quick."
                },
                {
                    'key': key + '-comment',
                    'userName': "houseOf4382",
                    'timePosted': "7hrs ago",
                    'profilePhoto':
                        "https://upload.wikimedia.org/wikipedia/commons/9/9c/House_of_Highlights_logo.png",
                    'comment': "What model porsche is that"
                },
                {
                    'key': key + '-comment',
                    'userName': "_1995till",
                    'timePosted': "55 mins ago",
                    'profilePhoto': "https://pbs.twimg.com/media/Ec08188XgAE-Xux.jpg",
                    'comment': "🔥🔥"
                },
                {
                    'key': key + '-comment',
                    'userName': "omgGT3_992",
                    'timePosted': "Just now",
                    'profilePhoto': "https://i.ytimg.com/vi/cLBVGqeEHLo/maxresdefault.jpg",
                    'comment': "hahahah twins 😎"
                },
                {
                    'key': key + '-comment',
                    'userName': "F80_WES",
                    'timePosted': "6 mins ago",
                    'profilePhoto': "https://solomotorsports.net/wp-content/uploads/DSC_1102-1.jpg",
                    'comment': "F80 M3 > GT3"
                },
                {
                    'key': key + '-comment',
                    'userName': "codewithWes",
                    'timePosted': "1 min ago",
                    'profilePhoto':
                        "https://www.minimaldesksetups.com/wp-content/uploads/2020/09/Featureimage.jpg",
                    'comment': "Dream car !!!"
                }
            ]
    
    def get_random_string(length):
        # choose from all lowercase letter
        letters = string.ascii_lowercase
        result_str = ' '.join(random.choice(letters) for i in range(random.randint(1,20)))
        sente = ''.join(result_str for i in range(length))
        return sente
        
    def createStoryArray(type):
        story = []
        count = 0
        cardText = type+" Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede."
        for (x) in [0,1,2,3,4]:
            story.append({
                'key': 'storycard-'+type+'-'+ str(count),
                'isActive':'false',
                'data': {
                    'storyTitle': '',
                    'cardTitle': get_random_string(8),
                    'cardText': cardText,
                    'category': tabItems[random.randint(1,4)],
                    'views': random.randint(10,2000),
                    'likes': random.randint(10,2000),
                    'unlikes': random.randint(10,2000),
                    'cardComments': cardComment('storycard-'+type+'-'+ str(count))
                }
            })
            count += 1
        return story
    
    def getUserStory():
        uStry = []
        for x in tabItems:
            uStry.append({x: createStoryArray(x)})
        for x in moreTabItems:
            uStry.append({x: createStoryArray(x)})
        return uStry
    
    
    return {
            'app_name': 'T-Hub Social Portal',
            'app_name_alias': 'T-Hub',
            'message': "This is a test message",
            'auth_drawer_items': [
                { 'title': 'Home', 'icon': 'mdi-home-city','url': 'home' },
                { 'title': 'My Profile', 'icon': 'mdi-account', 'url': 'profile' },
            ],
            'guest_drawer_items': [
                { 'title': 'Home', 'icon': 'mdi-home-city' },
            ],
            'auth_drawer_sub_items': [],
            'guest_drawer_sub_items': [
                { 'title': 'SIGNIN', 'icon': 'mdi-login-variant' },
                { 'title': 'Music', 'icon': 'mdi-music-note' },
                { 'title': 'Book', 'icon': 'mdi-book' },
                { 'title': 'Image', 'icon': 'mdi-image' },
            ],
            'auth_drawer_sub_mini_items': { 'title': 'SIGNIN', 'icon': 'mdi-login-variant' },
            'guest_drawer_sub_mini_items': { 'title': 'SIGNIN', 'icon': 'mdi-login-variant' },
            'guest_right_drawer_items': [
                { 'title': 'SIGNIN', 'icon': 'mdi-login-variant' },
                { 'title': 'Music', 'icon': 'mdi-music-note' },
                { 'title': 'Book', 'icon': 'mdi-book' },
                { 'title': 'Image', 'icon': 'mdi-image' },
            ],
            'tabItems': tabItems,
            'moreTabItems': moreTabItems,
            'userStoryLazy': getUserStory(),
            'footer': {
                'icons': [
                    'mdi-facebook',
                    'mdi-twitter',
                    'mdi-linkedin',
                    'mdi-instagram',
                ]
            },
            # 'getCommentChipIcons': getCommentChipIcons()
        }
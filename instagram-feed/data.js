const initialData = {
    profile: {
        avatar: require("../assets/instagram-feed-images/hayday.jpeg"),
    },
    stories: [
        {
            id: 1,
            avatar: require("../assets/instagram-feed-images/avatar1.jpg"),
            name: "King NyKeem",
            isSeen: false,
        },

        {
            id: 2,
            avatar: require("../assets/instagram-feed-images/avatar.jpg"),
            name: "That girl Nyia",
            isSeen: true,
        },

        {
            id: 3,
            avatar: require("../assets/instagram-feed-images/lilprince.jpeg"),
            name: "Prince Elijah",
            isSeen: true
        },

        {
            id: 4,
            avatar: require("../assets/instagram-feed-images/lilgrape.jpeg"),
            name: "Lil Grape",
            isSeen: true,
        },

        {
            id: 5,
            avatar: require("../assets/instagram-feed-images/lilrocci.jpeg"),
            name: "Lil Rocci",
            isSeen: false,
        },

    ],
    articles: [
      {
        id: 1,
        avatar: require("../assets/instagram-feed-images/avatar1.jpg"),
        name: "King NyKeem",
        image: require("../assets/instagram-feed-images/daking.jpeg"),
        likes: 914,
        commentCount: 14,
        comments:''
      },
      {
        id: 2,
        avatar: require("../assets/instagram-feed-images/avatar.jpg"),
        name: "That girl Nyia",
        image: require("../assets/instagram-feed-images/hayday.jpeg"),
        likes: 737,
        commentCount: 73,
        comments:''
      },
      {
        id: 3,
        avatar: require("../assets/instagram-feed-images/lilprince.jpeg"),
        name: "Prince Elijah",
        image: require("../assets/instagram-feed-images/myboo.jpeg"),
        likes: 1070,
        commentCount: 87,
        comments:''
      },
      {
        id: 4,
        avatar: require("../assets/instagram-feed-images/lilgrape.jpeg"),
        name: "Lil Grape",
        image: require("../assets/instagram-feed-images/beauty.jpeg"),
        likes: 987,
        commentCount: 23,
        comments:''
      },
      {
        id: 5,
        avatar: require("../assets/instagram-feed-images/lilrocci.jpeg"),
        name: "Lil Rocci",
        image: require("../assets/instagram-feed-images/cruise.jpeg"),
        likes: 107,
        commentCount: 7,
        comments:''
      },
    ],
}

const data = {
    ...initialData,
    articles: initialData.articles.map(article => {
        return {
            ...article,
            comments: `View all ${article.commentCount} comments`
        }
    })
}

export default initialData;
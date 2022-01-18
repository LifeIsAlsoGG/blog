const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Draco's Blog",
  description: "美好的肉体即正义本身",
  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
    },
    "/zh/": {
      title: "Draco's Blog",
      description: "美好的肉体即正义本身"
    },
  },

  themeConfig: {
    logo: "https://blog-1300186248.cos.ap-shanghai.myqcloud.com/avatar.png",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "Draco",
    repo: "https://github.com/LifeAlsoIsGG",

    nav: [
      {
        text: "Category",
        link: "/category/",
        icon: "note",
      },
      {
        text: "My Project",
        link: "/project/",
        icon: "note",
      },
      {
        text: "Guide",
        icon: "creative",
        link: "/guide/",
      },
      {
        text: "About",
        link: "/about/",
        icon: "info",
      }
    ],

    sidebar: {
      "/": [
        "study-line",
        {
          title: "My Project",
          icon: "creative",
          prefix: "my-project/",
          children: ["", "Music-Recognition", "MyProject-AttendanceMiniprogram", "MyProject-JavaWeb-ActivitySystem",
            "MyProject-SupermarketSystem"]
        },
        {
          title: "Interview",
          icon: "creative",
          prefix: "interview/",
          children: ["Java-Interview", "Computer-network", "OperatingSystem", "tencent-cloud-note", "cekai"]
        },
        {
          title: "java",
          icon: "code",
          prefix: "java/",
          children: ["", "Java-BasicNotes", "Java-Interview", "Java-Methods", "Java-Collections",
            {
              title: "Java-Thread",
              icon: "",
              prefix: "java-MultiThread/",
              children: ["", "Java-MultiThread-1", "Java-MultiThread-2", "Java-MultiThread-keyword", "Java-MultiThread"]
            },
            {
              title: "Java-JVM",
              icon: "",
              prefix: "java-JVM/",
              children: ["", "Java-JVM-Classloader", "Java-JVM-Run", "Java-JVM"]
            },
            {
              title: "Java-DesignPattern",
              icon: "",
              prefix: "java-DesignPatterns/",
              children: ["", "Java-DesignPatterns-SevenPrinciple", "Java-DesignPatterns-CreationalPatterns"
                , "Java-DesignPatterns-BehavioralPatterns", "Java-DesignPatterns-StructuralPatterns", "Java-DesignPatterns-J2eePattern"]
            }, "Java-String", "Java-annotation&reflection", "Java-IO", "Java-Date", "Java-UML-ClassDiagram", "Java-NewFeature"]

        },

        {
          title: "Golang",
          icon: "creative",
          prefix: "golang/",
          children: ["Golang", "Golang-description&use"]
        },

        {
          title: "Database",
          icon: "creative",
          prefix: "database/",
          children: [
            "",
            {
              title: "Mysql",
              icon: "creative",
              prefix: "mysql/",
              children: ["Mysql_theory_note", "SQL_note"]
            },

            {
              title: "Redis",
              icon: "creative",
              prefix: "redis/",
              children: ["Redis_theory_note", "Redis_deployment&use", "Redis_scene"]
            },

            {
              title: "Hadoop",
              icon: "creative",
              prefix: "hadoop/",
              children: ["Hadoop_pseudo-distributed_configuration"]
            }

          ],
        },

        {
          title: "Spring",
          icon: "creative",
          prefix: "Spring/",
          children: ["Spring", "Spring-annotation", "Spring-error&hole", "Spring-RestTemplate", "Spring-Interview",
            {
              title: "Spring Boot",
              icon: "creative",
              prefix: "springBoot/",
              children: [{
                title: "SpringBoot tool",
                icon: "creative",
                prefix: "springBoot-tool/",
                children: ["SpringBoot&Vue", "EasyExcel-use",
                  "IDEA-Initial-Springboot+reverse-project+Configuration",
                  "Server-deployment-SpringBoot", "Swagger-use", "JWT-Authorization"]
              }]
            },
            {
              title: "SpringCloud",
              icon: "creative",
              prefix: "SpringCloud/",
              children: ["Know-SpringCloud", "SpringCloud"]
            },
            {
              title: "Spring Security",
              icon: "",
              prefix: "springSecurity/",
              children: ["SpringSecurity"]
            },
            {
              title: "Maven",
              icon: "",
              prefix: "Maven/",
              children: ["Maven"]
            },


          ]
        },
        {
          title: "Mybatis",
          icon: "creative",
          prefix: "mybatis/",
          children: ["Mybatis-basic-notes", "Mybatis-grammar-notes", "MybatisPlus-notes", "Mybatis-reverse-project&Example-use"]
        },


        {
          title: "DataStructure",
          icon: "creative",
          prefix: "dataStructure&algorithm/",
          children: ["", "DataStructure", "Algorithm", "DataStructure&algorithm_question"],
        },

        {
          title: "Linux",
          icon: "creative",
          prefix: "linux/",
          children: ["Linux-skill", "Linux-commands"],
        },

        {
          title: "ElasticSearch",
          icon: "creative",
          prefix: "elasticSearch/",
          children: ["ElasticSearch", "ElasticSearch-Interview"],
        },

        {
          title: "Docker",
          icon: "creative",
          prefix: "docker/",
          children: ["Docker-Note", "Docker-deployment", "Docker-Install-software"],
        },

        {
          title: "Nginx",
          icon: "creative",
          prefix: "nginx/",
          children: ["", "Nginx-basicNote&deployment", "Nginx-LoadBalance", "Nginx-ReverseProxy", "Nginx-Dynamic&static"],
        },

        {
          title: "MessageQueue",
          icon: "creative",
          prefix: "mq/",
          children: [
            {
              title: "RabbitMQ",
              icon: "creative",
              prefix: "rabbitMQ/",
              children: ["RabbitMQ", "RabbitMQ-Interview"]
            }
          ]
        },

        {
          title: "ErrorNote",
          icon: "creative",
          prefix: "error/",
          children: ["Springboot-Error"],
        },

        {
          title: "Git",
          icon: "creative",
          prefix: "git/",
          children: ["Git"],
        },

        {
          title: "Frontend",
          icon: "creative",
          prefix: "front-end/",
          children: ["", "JavaScript-Interview", "Promise_Asynchronous_call"],
        },

        {
          title: "Guide",
          icon: "creative",
          prefix: "guide/",
          children: ["", "page", "markdown", "disable", "encrypt"],
        },
        "about"

      ],

    },


    locales: {
      "/zh/": {
        nav: [
          {
            text: "目录",
            link: "/category/",
            icon: "note",
          },
          {
            text: "我的项目",
            link: "/project/",
            icon: "note",
          },
          {
            text: "如何使用",
            icon: "creative",
            link: "/zh/guide/",
          },
          {
            text: "关于",
            link: "/about/",
            icon: "info",
          }
        ],


        sidebar: {
          "/": [
            "",
            "home",
            "slides",
            "layout",
            {
              title: "如何使用",
              icon: "creative",
              prefix: "guide/",
              children: ["", "page", "markdown", "disable", "encrypt"],
            },
          ],
        },
      },
    },

    blog: {
      intro: "/about/",
      sidebarDisplay: "mobile",
      links: {
        Github: "https://github.com/LifeAlsoIsGG",
        Twitter: "https://twitter.com/LifeAlsoIsGG",
        QQ: "http://localhost:8083/blog-vuepress/tencent:/AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=1138312802.html",
        Photos: "https://photos.lifeisgg.online/",
      },
    },


    footer: {
      display: true,
      content: "粤ICP备19126168号",
    },

    // comment: {
    //   type: "waline",
    //   serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    comment: {
      type: "valine",
      appId: "UhjxD2LPBH9vMPURVoIv0EGJ-gzGzoHsz",
      appKey: "xlubLmY4NeX73i1NivxCO0jA",
      visitor: "true",
      recordIP: "true",
      placeholder: "还请不吝赐教"
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});

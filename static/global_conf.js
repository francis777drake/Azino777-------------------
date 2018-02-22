const GlobalConfigs = {
  pageTitle: "Azino777 клуб-игровые слоты",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://martel.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://martel.top/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://martel.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://martel.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://martel.top/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://martel.top/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "indigo lighten-1", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}




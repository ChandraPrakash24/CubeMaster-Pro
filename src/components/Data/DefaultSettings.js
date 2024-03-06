const intialSettings = {
    timerSettings: {
      freezeTime: 0.5,
      isInspectionEnabled:false,
      inspectionTime:15,
      hideTimer:false,
      inspectionVoiceAlerts:"male",
      isConfirmBeforeDelete:false,
      importAndexport:"export"
    },
    themeSettings: {
      fontColor:"#FFFFFF",
      timerFontColor:"#FFFFFF",
      backColor:"#00141A",
      boardColor:"#141A29",
      backgroundImageUrl:"",
      backgroundType:"Gif",
      importAndexport:"export"
    },
  };
const styleInfo=[
  
    {
      nameOfClass:"body",
      styleName:"color",
      settingName:"fontColor"
    },
    {
      nameOfClass:"timerPlayGround",
      styleName:"color",
      settingName:"timerFontColor"
    },
    {
      nameOfClass:"body",
      styleName:"backgroundColor",
      settingName:"backColor"
    },
    {
      nameOfClass:"boardContainer",
      styleName:"backgroundColor",
      settingName:"boardColor"
    },
    {
      
      nameOfClass:"body",
      styleName:"fontFamily",
      settingName:"fontFamily"
    },
    {
      nameOfClass:"timerPlayGround",
      styleName:"backgroundImage",
      settingName:"backgroundImageUrl"

    }
  
]
  export  {intialSettings,styleInfo}
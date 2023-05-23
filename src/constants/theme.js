export const theme = Object.freeze({
    colors: {
        backgroundColor: "#09192F",
        globalBlackColor: "#000000",
        globalWhiteColor: "#ffffff",
        globalGreenColor: "#00b451",
        globalBorderColor: "#747478",
        globalGrayColor: "#323436",
        globalFontColor: "#B1BBD9",
        linkHoverColor: "#52CEB8",
        linkActiveColor: "#ffffff",
        headerBackgroundColor: "#09192F",
        headerLineColor: "#323436",
        footerLineColor: "#323436",
        footerBackgroundColor: "#09192F",
        accentColor: "#52CEB8",
        navigationIconColor: "#B1BBD9",
    },
    spacing: value => `${4 * value}px`,
    // in styled use: padding: ${props => props.theme.spacing(4)} // result - 16px
    shadows: {
        headerShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
        footerShadow: "0px -1px 100px 2px rgba(0, 0, 0, 0.75)",
        formInputShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    },
    fonts: {
        globalFont: `"Open Sans", sans-serif`,
    },
});

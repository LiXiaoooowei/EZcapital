import variable from "./../variables/platform";

export default (variables = variable) => {
    const cardTheme = {
        ".transparent": {
            shadowColor: null,
            shadowOffset: null,
            shadowOpacity: null,
            shadowRadius: null,
            elevation: null,
            borderColor: variables.cardBorderColor
        },
        marginVertical: 5,
        marginHorizontal: 2,
        flex: 1,
        borderWidth: variables.borderWidth,
        borderRadius: 2,
        borderColor: variables.cardBorderColor,
        flexWrap: "wrap",
        backgroundColor: variables.cardDefaultBg,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        elevation: null
    };

    return cardTheme;
};

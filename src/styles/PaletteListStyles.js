export default {
    bg_wrapper: {
        backgroundColor: "#0652dd",
        height: "100%",
        overflow: "auto"
    },
    container: {
        height: "100%",
        width: "992px",
        maxWidth: "60%",
        margin: "0 auto",
        paddingBottom: "40px"
    },
    row: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "30px"
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "30px 0 40px",
        "& h1": {
            color: "#000",
            fontSize: "32px",
            fontWeight: "600",
            lineHeight: "1",
            letterSpacing: "1px",
            margin: "0"
        },
        "& a": {
            color: "#fff",
            fontSize: "16px",
            fontWeight: "500",
            textDecoration: "underline",
            display: "inline-block"
        }
    }
}
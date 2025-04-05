import React from "react";

function ReviewTabel() {
    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        margin: "20px 0",
        fontSize: "18px",
        textAlign: "left",
    };

    const thStyle = {
        backgroundColor: "#f2f2f2",
        color: "#333",
        padding: "10px",
        border: "1px solid #ddd",
    };

    const tdStyle = {
        padding: "10px",
        border: "1px solid #ddd",
    };

    const buttonStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        color: "white",
        border: "none",
        fontSize: "16px",
    };
    return (
        <>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Ratings</h1>
            <table style={tableStyle}>
                <tbody>
                    {storedData.map((item, index) => (
                        <tr key={index}>
                            <td style={{ ...tdStyle, textAlign: "center" }}>
                                <button
                                    style={{
                                        ...buttonStyle,
                                        backgroundColor: getColorByRate(item.selectedRate),
                                    }}
                                >
                                    {item.selectedRate}
                                </button>
                            </td>
                            <td style={tdStyle}>{item.review}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

    function getColorByRate(rate) {
        switch (rate) {
            case "5":
                return "#4CAF50";
            case "4":
                return "#8BC34A";
            case "3":
                return "#FFC107";
            case "2":
                return "#FF9800";
            case "1":
                return "#F44336";
            default:
                return "#ddd";
        }
    }
}

export default ReviewTabel;

export default function Card ({
    degree="none",
    gpa="0",
    colourCard="none",
    colourInfo="none",
    fontColour="white",
    font="0",
    image="icon/personTwo.png"
}) {
    return (
        <div style={{
            backgroundColor: colourCard, 
            fontSize: font,
            color: fontColour,
            border: "2px solid",
            display: "flex",
            alignItems:"center",
            borderRadius: "20px",
            width: "650px",
            padding: "20px",
            margin: "20px",
            fontWeight: "700"
        }}>
            <div style={{
                marginRight: "40px",
                marginLeft: "10px",
            }}>
                {
                    gpa <= "3.5" ? <img src={"icon/person.png"} width='70'/>:
                    gpa > "3.5" ? <img src={'icon/personThree.png'} width='70'/>:
                    <img src={image} width='70'/>
                }
            </div>

            <div style={{
                backgroundColor: colourInfo,
                borderRadius: "20px",
                boxShadow: "8px 8px #2B4570",
                padding: "20px",
                paddingLeft: "10px",
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                width: "480px"
            }}>
                <div style={{
                    padding: "10px",
                    marginBottom: "10px",
                    backgroundColor: "#2B4570",
                    color: "#EFCA08",
                    textAlign: "center",
                    borderRadius: "10px"
                }}>
                    {degree}
                </div>
                <div style={{
                    marginLeft: "20px",
                    textAlign: "left"
                }}>
                    GPA: {gpa}
                </div>
            </div>
        </div>
    )
}
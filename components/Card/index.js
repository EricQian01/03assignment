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
            border: "5px solid",
            display: "flex",
            alignItems:"center",
            borderRadius: "35px",
            width: "600px",
            padding: "25px",
            margin: "10px",
            fontWeight: "600"
        }}>
            <div style={{
                marginRight: "40px",
                marginLeft: "10px",
            }}>
                {
                    gpa <= "3.5" ? <img src={"icon/Money.png.jpeg"} width='90'/>:
                    gpa > "3.5" ? <img src={'icon/Money.png.jpeg'} width='90'/>:
                    <img src={image} width='70'/>
                }
            </div>

            <div style={{
                backgroundColor: colourInfo,
                borderRadius: "20px",

                padding: "20px",
                paddingLeft: "10px",
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                width: "600px"
            }}>
                <div style={{
                    padding: "20px",
                    marginBottom: "40px",
                    backgroundColor: "#F5F5DC",
                    color: "#000000",
                    textAlign: "center",
                    borderRadius: "5px"
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
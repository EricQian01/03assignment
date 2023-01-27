export default function Card ({
    name="none",
    position="none",
    specialty="Specialty: Eric is not very special to be honest",
    colourCard="none",
    colourInfo="none",
    font="0",
    fontColour="nardo",
    image="icon/whar.png"
}) {
    return (
        <div style={{
            backgroundColor: "#F5F5DC",
            fontSize: font,
            color: fontColour,
            display: "flex",
            alignItems:"center",
            borderRadius: "20px",
            width: "900px",
            padding: "25px",
            margin: "25px",
            fontWeight: "700"
        }}>
            <div style={{
                marginRight: "175px",
                marginLeft: "10px"
            }}>
                {
                    name === "Eric Qian" ? <img src={"icon/eric.JPG"} />:
                    <img src={image}/>
                }
            </div>
            <div style={{
                backgroundColor: colourInfo,
                padding: "20px",
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                width: "180px"
            }}>
                <div style={{
                    padding: "10px",
                    width: "100%",
                    backgroundColor: "#F5F5DC",
                    color: "#000000",
                    textAlign: "center",
                    borderRadius: "10px"
                }}>
                    {name}
                </div>
                <div style={{
                    padding: "15px",
                    textAlign: "left",
                    width: "100%"
                }}>
                    {position}
                </div>
                <div style={{
                    padding: "15px",
                    textAlign: "left",
                    width: "100%"
                }}>
                    {specialty}
                </div>
                
            </div>   
        </div>
    )
}
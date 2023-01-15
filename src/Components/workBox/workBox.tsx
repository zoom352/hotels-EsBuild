import  "./workBox.css"

const WorkBox = (props: any) => {
    const {
        children,
        width,
        height
    } = props

    return (
        <div className="wrapper" style={{width: width + "px", height: height + "px"}}>
            <div style={{width: (width/1.1) + "px", height: height + "px", marginLeft: "4%"}}>
                {children}
            </div>
        </div>
    )
}

export default WorkBox

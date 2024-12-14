

export const ExtraText = ({ event }: any) => {
    return (
        <>
            {
                event?.extra?.map((paragraph: any) => {
                    return (
                        //@ts-ignore
                        <>
                            <p className="fs-5 m-0 justify-text "><b>{paragraph.title}</b></p>
                            <div>
                                {paragraph.text?.map((item: any) => (<><p className="fs-5 m-0 justify-text ">{item}</p><p></p></>))}
                            </div>

                            <p className="fs-5 m-0 justify-text ">{paragraph.listTitle}</p>
                            <ul>
                                {paragraph.listText?.map((item: any) => (<li className="fs-5 m-0 justify-text ">{item}</li>))}
                            </ul>
                        </>
                    )
                })
            }
        </>
    )
}
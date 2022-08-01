const List = (props) => {
    return (
        <div>
            {
                props.list.map((item) => {
                    return (
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.num_comments}</span>
                            <span>{item.points}</span>
                        </div>
                    );
                })
            }
        </div>
    )
}

export { List }
const List = ({ list }) => {


    const Item = ({ item }) => {
        return (
            <div>
                <span>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
            </div>
        )
    }


    return list.map(item => <Item key={item.objectID} item={item} />);
}

export { List }
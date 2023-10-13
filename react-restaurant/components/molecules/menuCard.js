'use client'
export default function MenuCard(props) {

// const listItems = props.data.map(data => <li>{id}</li>)
console.log('Hello', props.data)

const dataMap = props.data.map((el) => {
    // key={el.id}
    return (
    <div>
    <div>{el.title}</div>
        <listIems 
            // className="card"
            // category={props.listItems.category}
            // title={props.listItems.title}
            // description={props.listItems.description}
            // price={props.listItems.price}
            // spicy-level={props.listItems.spicy_level}
        />
</div>
    )

})

return(
    {dataMap}
    // <>Hello</>
    
);

}
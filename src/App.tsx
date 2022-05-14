import lists, { List } from './lists'
import './App.css'

function App() {

    return <div style={{margin: '5em'}} >
        {lists.map(l => <CourseCard list={l} />)}
    </div>
}

function CourseCard({list}: { list: List }) {
    return <div>
        <h2>{list.name}</h2>
        <h5>{list.hint}</h5>
        <ul>
            {list.videos.map(v => <li><a href={v.url} target='_blank' >{v.name}</a></li>)}
        </ul>
    </div>
}

export default App

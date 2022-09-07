import { userSchema }from '../../api/schemas';

interface ResumeRow {
    id: number;
    createdAt: Date;
    owner: userSchema.User;
    ownerId: number;
    text: string;
}

interface IProps {
    data: ResumeRow[],
    deleteFn?:(id: number) => void,
    editFn?:(id: number) => void 
}
export function ResumesTable(props:IProps){
    const { data, deleteFn, editFn } = props;
    
    return <table>
        <tr>
            <th>ID</th>
            <th>Data de Criação</th>
            <th>Autor</th>
            <th>Texto</th>
        </tr>
        {data.map((row) => <tr>
            <td>{row.id}</td>
            <td>{row.createdAt.toISOString()}</td>
            <td>{row.owner.name}</td>
            <td>{row.text}</td>
            {editFn && <td><button onClick={() => editFn(row.id)}>Editar</button></td>}
            {deleteFn && <td><button onClick={() => deleteFn(row.id)}>Delete</button></td>}
        </tr>)}
    </table>
}
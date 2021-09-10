import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import TableStyles from './Table.module.css';
import errorImage from '../../images/error-image.png';

const Table = ({loading, setLoading, error, countries}) => {
    return loading ? (
        <h2 className={TableStyles.loadingMessage}>Fetching countries...</h2>
    ) : error ? (
        <div className={TableStyles.errorContainer}>
                <h2 className={TableStyles.errorText}>Oops, something went wrong.</h2>
                <img src={errorImage} alt="Cartoon of confused man surrounded by question marks" className={TableStyles.img}/>
        </div>
    ) : (
        <table className={TableStyles.table} cellSpacing="0" cellPadding="0">
            <TableHead />
            <TableBody 
            countries={countries}/>
        </table>
    )
}

export default Table

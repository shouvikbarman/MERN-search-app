import '../styles/result.css'
function Result({filteredData}) {
    return (
        <div className="result-container">
            <table>
                <tbody>
                    <tr>
                        <th>Company Name</th>
                        <th>Primary Text</th>
                        <th>Headline</th>
                        <th>Description</th>
                        <th>CTA</th>
                        <th>Logo</th>
                    </tr>
                </tbody>
                <tbody>
                    {filteredData.map((ad) => {
                        return <tr key={ad._id}>
                            <td>{ad.company.name}</td>
                            <td>{ad.primaryText}</td>
                            <td>{ad.headline}</td>
                            <td>{ad.description}</td>
                            <td>
                                <a target='_blank' 
                                    rel="noreferrer" 
                                    href={`https://${ad.company.url}`}>{ad.cta}</a>
                            </td>
                            <td><img src={ad.imgUrl} alt='company logo'/></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Result;
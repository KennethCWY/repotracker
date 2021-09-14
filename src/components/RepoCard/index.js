import React from 'react';

const RepoCard = ({ data }) => {
    return (
        <div className="" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{data.dateCreated}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">/repo/link</a>
            </div>
        </div>
    )
}

export default RepoCard;
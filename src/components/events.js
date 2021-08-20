import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Events = (props) => {
    return (
        <div className="card-container">
            {props.events.map((event, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{event.name}</span>
                        <ul>
                            <li>Event Info: {car["eventInfo"]}</li>
                            <li>Event Date: {car["eventDate"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/events/${event.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Events
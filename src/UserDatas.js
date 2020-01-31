import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API = 'https://acme-users-api-rev.herokuapp.com/api';

const fetchNotes = async (user)=> {
    return(await axios.get(`${API}/users/${user.id}/notes`)).data
}

const fetchVacations = async (user)=> {
    return(await axios.get(`${API}/users/${user.id}/vacations`)).data
}

const fetchFollowingCompanies = async (user)=> {
    return(await axios.get(`${API}/users/${user.id}/followingCompanies`)).data
}


const UserDatas = ({user}) => {

    const [notes, setNotes] = useState([]);
    const [vacations, setVacations] = useState([]);
    const [followingCompanies, setFollowingCompanies] = useState([]);

    useEffect(() => {
        console.log("use")
        if(user.id){
            console.log("aeaeaeaeaeaeaffect")
            fetchNotes(user)
                .then( notes => setNotes(notes))
            fetchVacations(user)
                .then( vacations => setVacations(vacations))
            fetchFollowingCompanies(user)
                .then( followingCompanies => setFollowingCompanies(followingCompanies))
        }
      }, [user])

    const toLoad = {
        notes:[...notes],
        vacations:[...vacations],
        followingCompanies:[...followingCompanies]
    }
    console.log(toLoad)
    return(<div id = "userData">
        <div>
            <h1>Notes</h1>
            <p>You have {toLoad.notes.length} notes</p>
        </div>
        <div>
            <h1>Vacations</h1>
            <p>You have {toLoad.vacations.length} vacations</p>
        </div>
        <div>
            <h1>Companies</h1>
            <p>You have {toLoad.followingCompanies.length} followed companies</p>
        </div>
    </div>)
}

export default UserDatas
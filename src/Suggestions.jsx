import { useEffect, useState } from "react";

const Suggestions = () => {

    const [profile, setProfile] = useState(null);
    const [suggestions, setsuggestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/profile").
        then((data) => data.json()).
        then((data) => setProfile(data)).
        catch((err) => console.log(err));

        fetch("http://localhost:3000/suggestions").
        then((data) => data.json()).
        then((data) => setsuggestions(data)).
        catch((err) => console.log(err));
    })

    return (
        <div className="suggestions w-75 m-4">
            <div>{profile
                ? <div className="d-flex">
                    <img className="dp rounded-circle" src={profile.profile_pic} alt="Profile Pic" />
                    <h5>{profile.user_name}</h5>
                    <small className="ms-auto text-primary">Switch</small>
                </div>
                : <p>Loading</p>
            }
            </div>

            <div className="d-flex">
                <p>Suggested for you</p>
                <b className="ms-auto">See All</b>
            </div>

            <div>
                {suggestions.length === 0
                    ? <div>Suggestions loading</div>
                    : <div>{suggestions.map((suggestion) => (
                        <div className="" key={suggestion.id}>
                            <div className="d-flex">
                                <img className="dp rounded-circle" src={suggestion.profile_pic} alt="Profile Pic" />
                                <h5>{suggestion.user_name}</h5>
                                <p className="text-primary ms-auto">Follow</p>
                            </div>
                        </div>
                    ))}</div>
                } 
            </div>
        </div>
    );
}

export default Suggestions
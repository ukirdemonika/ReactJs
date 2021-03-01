import React,{Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    render(){
        const {link,image}=this.props.socialProfile;
        return(
            <span>
                <a href={link}>{link}
                    <img src={images} alt="social-profile" style={{width:35,height:35,margin:10}}/>
                </a>
            <span>
        )
    }
}

class SocialProfiles extends Component{
    render()}{
        return(
            <div>
               <h2>Connect with me..</h2>
                <div>
                SOCIAL_PROFILES.map(Social_profileParam=>{
                    return(
                        <SocialProfile key={Social_profileParam.id} socialProfile={Social_profileParam}/>
                    ) 
                })
                </div> 
            </div>
        )
    }
}
export default Socialprofiles;
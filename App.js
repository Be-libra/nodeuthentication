import React,{Component} from 'react';
import Navbar from './component/Navbar';
import './component/Navbar.css';
import Header from './component/Header/Header';
import MainBody from './component/Body/Body';
import Description from './component/Body/Description';
import SpaceComponents from './component/SpaceComponents/SpaceComponents';
import Celestialobject from './Database';
import Datacomponent from './component/Datacomponent/Datacomponent';
import LowerBody from './component/LowerBody/LowerBody';






class App extends Component {
constructor(){
  super();
  this.state={
    initRoute:'home',
    Route:'',
    setcomponent:'',
    InfoRoute:''
  }
}


  onRoutechange=(Route)=>{
        if(Route===''){
          this.setState({Route:this.state.initRoute})
        }
        else if(Route==='Components'){
          this.setState({Route:'Components'});
          this.setState({InfoRoute:Celestialobject.space}) ;

        }
        else{
          this.setState({Route:'home'})
        }

  }
  onCategoryclick=(setcomponent)=>{
    this.setState({setcomponent:setcomponent});
    this.setState({Route:'Components'});
    switch(setcomponent){
        case 'Space': this.setState({InfoRoute:Celestialobject.space});
          break;
        case 'SolarSystem': this.setState({InfoRoute:Celestialobject.solarsystem});
          break;
        case 'Moons': this.setState({InfoRoute:Celestialobject.moon});
          break;
        case 'Sun': this.setState({InfoRoute:Celestialobject.sun});
          break;
        case 'Stars': this.setState({InfoRoute:Celestialobject.star});
          break;
        case 'Galaxies': this.setState({InfoRoute:Celestialobject.galaxies});
          break;
        case 'Planets': this.setState({InfoRoute:Celestialobject.planets});
          break;
        case 'Satellites': this.setState({InfoRoute:Celestialobject.satellites});
          break;
        case 'Asteroids': this.setState({InfoRoute:Celestialobject.asteroids});
          break;
        case 'Universe': this.setState({InfoRoute:Celestialobject.universe});
          break;
        default: this.setState({InfoRoute:Celestialobject.space}) ;
          break;

      }
    }


 


  render(){
    const {Route} = this.state;
    let Info= this.state.InfoRoute;
    return (
      <div>
        <div className='nav'>
        < Navbar  Route={this.state.Route} onRoutechange={this.onRoutechange}/>
        
        </div>
        { (Route==='home' || Route==='')?
            <div>
              <Header />
              <MainBody/>
              <Description/>
              <LowerBody />
              <SpaceComponents onCategoryclick={this.onCategoryclick} />
              
            </div>
            :
                <div>
                  <Header />
                  <Info />
                  <Datacomponent onCategoryclick={this.onCategoryclick} />
                </div>
                
            
        }
      </div>
    );
}
}


export default App;
 
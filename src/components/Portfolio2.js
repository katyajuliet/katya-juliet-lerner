import React, { Component } from 'react';

class Portfolio2 extends Component {
  render() {

    if(this.props.data){
      var projects2 = this.props.data.projects2.map(function(projects2){
        var projectImage = 'images/portfolio/'+projects2.image;
        return <div key={projects2.title} className="columns portfolio2-item">
           <div className="item-wrap">
            <a href={projects2.url} title={projects2.title}>
               <img alt={projects2.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio2-item-meta">
                 <h5>{projects2.title}</h5>
                     <p>{projects2.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

        return (
          <section id="portfolio2">
    
          <div className="row">
    
             <div className="twelve columns collapsed">
    
                <div id="portfolio2-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {projects2}
                </div>
              </div>
          </div>
       </section>
        );
      }
    }
    
    export default Portfolio2;
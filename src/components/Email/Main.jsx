import React from 'react'
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';

export default function Main() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <>
      <div className='main_body'>
        <div className="sidebar">
          <button className="sidebar_compose">
              <span class="material-icons">add_circle</span>
              Compose Mail
          </button>
          <div className="sidebarOption sidebarOption_active">
            <span className="material-icons">inbox</span>
            <h3>Inbox</h3>            
          </div>
          <div className="sidebarOption">
            <span className="material-icons">
            star</span>
            <h3>Starred</h3>           
          </div>
          <div className="sidebarOption">
            <span className="material-icons">
            access_time</span>
            <h3>Snoozed</h3> 
          </div>
          <div className="sidebarOption">
            <span className="material-icons">
            label_important</span>
            <h3>Important</h3> 
          </div>
          <div className="sidebarOption">
            <span className="material-icons">
            near_me</span>
            <h3>Sent</h3> 
          </div>
          <div className="sidebarOption">
            <span className="material-icons">
            expand_more</span>
            <h3>More</h3> 
          </div>
        </div>    {/*sidebar div tag */}
  
        {/* starting Email List */}

        <div className="emailList">
          <div className='emailList_settings'>
            <div className="emailList_settingLeft">
                <input type="checkbox"/>
                <span class='material-icons'> arrow_drop_down</span> 
                <span class='material-icons'> redo</span> 
                <span class='material-icons'> more_vert</span> 
            </div>
            <div className="emailList_settingRight">
                <span class='material-icons'> chevron_left</span> 
                <span class='material-icons'> chevron_right</span> 
                <span class='material-icons'> keyboard_hide</span> 
                <span class='material-icons'> settings</span> 
            </div>
          </div>

          <div className='emailList_sections'>
              <div className='section section_selected'>
                <span className='material-icons'>inbox</span>
                <h4>Primary</h4>
              </div>

              <div className='section'>
                <span className='material-icons'>people</span>
                <h4>Social</h4>
              </div>

              <div className='section'>
                <span className='material-icons'>local_offer</span>
                <h4>Promotion</h4>
              </div>
          </div>

          <div className='emailList_list'>
            
            <div className="emailRow">
                <div className="emailRow_options">
                  <input type="checkbox"/>
                  <span className='material-icons'>star_border</span>
                  <span className='material-icons'>label_important</span>
                </div>
                <h3 className="emailRow_title">Youtube</h3>
                <div className="emailRow_message">


                              <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                                >
                                view mail
                                </button>
                                </h2>
                                <div
                                id="collapseOne"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample" >
                                <div class="accordion-body">
                                To recieve more mails sign into all your accounts using Mail.
                                </div>
                                </div>
                                </div>
                                </div>
                    
                    <span className='emailRow _description'> 
                      
                            {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                      // expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel1bh-content"
                                      id="panel1bh-header">
                                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        LinkedIN
                                      </Typography>
                                      <Typography sx={{ color: 'text.secondary' }}> <b>new notification</b> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <Typography>
                                        Your profile is looking great
                                        Your work and accomplishments are being recognized
                                        226 profile views
                                        See who's looking
                                      </Typography>
                                    </AccordionDetails>
                                  </Accordion> */}
                    
                    
                    </span>
                </div> 
                <p className="emailRow_time">10pm</p>
            </div>
          
</div>


         </div>  {/* ending email list */}

      </div>   {/* main body tag */}
    </>
  )
}

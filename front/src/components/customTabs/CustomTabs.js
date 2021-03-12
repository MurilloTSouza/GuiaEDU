import React, { PureComponent } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import TabPanel from './tabPanel/TabPanel'

export default class CustomTabs extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            currentTab: 0
        }
    }

    handleTabChange = (event, value) => {
        this.setState({currentTab: value})
    }

    render(){
        const {currentTab} = this.state;
        const {tabs} = this.props; // should be {id: '', label: '', content: ''}

        const tabLabels = tabs.map( t => {
            return <Tab label={t.label} key={t.id} />
        })

        const tabPanels = tabs.map( (t, index) => {
            return (
                <TabPanel
                    value={currentTab} 
                    index={index}
                    key={t.id}
                >
                    {t.content}
                </TabPanel>
            )
        })

        return(
            <>
                <Tabs
                    value={currentTab}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    {tabLabels}
                </Tabs>
                {tabPanels}
            </>
        )
    }

}

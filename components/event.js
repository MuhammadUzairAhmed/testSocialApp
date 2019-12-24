import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Dimensions,
    Picker
} from 'react-native';
import { Card } from 'react-native-elements';
import EventList from './listOfEvents'
import Icon from 'react-native-vector-icons/AntDesign';
const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickerValue:'',
            screenHeight: 0,
            eventCat:false,
            changeableHeight:Dimensions.get('window').height,
            changeImage:require('./../asset/events-image_4.jpg'),
            data: [
                { id: 1, title: "Tech", color: "#FF4500", image: require('./../asset/containersImage.png') },
                { id: 2, title: "Fitness", color: "#87CEEB", image: require('./../asset/img3.png') },
                { id: 3, title: "Sports", color: "#4682B4", image: require('./../asset/img4.jpg') },
                { id: 4, title: "Writng", color: "#6A5ACD", image: require('./../asset/img2.jpg') },
                { id: 5, title: "Drawing", color: "#FF69B4", image: require('./../asset/img5.jpg') },
                { id: 6, title: "Music", color: "#00BFFF", image: require('./../asset/img2.jpg') },
                { id: 7, title: "Language and Culture", color: "#00FFFF", image: require('./../asset/img3.png') },
                { id: 8, title: "Pets", color: "#20B2AA", image: require('./../asset/img4.jpg') },
                { id: 9, title: "Hobbies", color: "#191970", image: require('./../asset/checkHeader.png') },
                { id: 10, title: "Game", color: "#008080", image: require('./../asset/img3.png') },
            ],
            eventCategory:[
                { id: 1, title: "Tech", color: "#FF4500", image: require('./../asset/containersImage.png'), e_id:1 },
                { id: 2, title: "Fitness", color: "#87CEEB", image: require('./../asset/img3.png'), e_id:1 },
                { id: 3, title: "Sports", color: "#4682B4", image: require('./../asset/img4.jpg'), e_id:1 },
                { id: 4, title: "Writng", color: "#6A5ACD", image: require('./../asset/img2.jpg'), e_id:2 },
                { id: 5, title: "Drawing", color: "#FF69B4", image: require('./../asset/img5.jpg'), e_id:2 },
                { id: 6, title: "Music", color: "#00BFFF", image: require('./../asset/img2.jpg'), e_id:3 },
                { id: 7, title: "Language and Culture", color: "#00FFFF", image: require('./../asset/img3.png'), e_id:3 },
                { id: 8, title: "Pets", color: "#20B2AA", image: require('./../asset/img4.jpg'), e_id:4 },
                { id: 9, title: "Hobbies", color: "#191970", image: require('./../asset/checkHeader.png'), e_id:5 },
                { id: 10, title: "Game", color: "#008080", image: require('./../asset/img3.png'), e_id:5 }
            ],
            dispEvent:[]
        }
    }

    clickEventListener(item) {
        Alert.alert(item.title)
    }
    closed = () => {
        this.props.closeEvent(false)
    }
    eventClickListener=(item)=>{
        this.setState({dispEvent:[]})
       let categorizedEvents = this.state.eventCategory.filter((items)=>{
            return items.e_id == item.id
        })
        if(categorizedEvents.length>0 ){
            this.setState({pickerValue:item.id,dispEvent:categorizedEvents,changeImage:item.image},()=>{
                this.setState({eventCat:true,changeableHeight:Dimensions.get('window').height})
            })
         }else{
            alert('No category found of this event')
        }
        
    }
    closedCategory=()=>{
        this.setState({eventCat:false,dispEvent:[]})
    }
    changeMenu=(item,index)=>{
       this.setState({pickerValue:item})
       let getElement = this.state.data.find((items)=>{
        return items.id == item
       })
       this.eventClickListener(getElement)
    }
    render() {
        const  Sheight  = this.state.changeableHeight;
        return (
            <View style={{ Height: "auto", maxHeight: Sheight,marginBottom:60,paddingBottom:60}}>
                {!this.state.eventCat && <Icon onPress={this.closed} style={{ marginLeft: 15, marginTop: 20 }} name='arrowleft' size={20} color="black" />}
                {this.state.eventCat && <Icon onPress={this.closedCategory} style={{ marginLeft: 15, marginTop: 20 }} name='arrowleft' size={20} color="black" />}
                <Image source={this.state.changeImage} style={{ width: '100%', height: '20%' }} />
                {!this.state.eventCat && <FlatList
                    data={this.state.data}
                    renderItem={({ item, index }) => {
                        return <TouchableOpacity style={styles.setDiv} key={index} onPress={() => this.eventClickListener(item)}>
                            <Card containerStyle={{ borderRadius: 10, borderColor: 'red', elevation: 10 }} title={item.title}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <View style={{ width: '20%' }}>
                                        <Icon name='calendar' size={60} color="black" style={{ alignSelf: 'center' }} />
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>1{index}</Text>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>March</Text>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>2019</Text>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Image source={item.image} style={styles.cardImage} />
                                        <Text>Get connected with local groups and events so you can meet new people and try new things.</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    }}
                />
                }
                {this.state.eventCat && <View>
                   <View style={{height:'auto',borderWidth:2,borderColor:'grey'}}>
                   <Picker
                        style={styles.listStyle}
                        selectedValue={this.state.pickerValue}
                        onValueChange={ (item,index)=>this.changeMenu(item,index)}
                        itemStyle={styles.listItems}
                        >
                            {this.state.data.map(item=><Picker.Item key={item.id} label={item.title} value={item.id} />)}
                          </Picker>
                   </View>
                    <Text style={{fontWeight:'bold',fontSize:25}}>Event Category</Text>
                    <FlatList
                    data={this.state.dispEvent}
                    renderItem={({ item, index }) => {
                        return <TouchableOpacity style={styles.setDiv} key={index} onPress={() => this.eventClickListener(item)}>
                            <Card containerStyle={{ borderRadius: 10, borderColor: 'red', elevation: 10 }} title={item.title}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <View style={{ width: '20%' }}>
                                        <Icon name='calendar' size={60} color="black" style={{ alignSelf: 'center' }} />
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>1{index}</Text>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>March</Text>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>2019</Text>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Image source={item.image} style={styles.cardImage} />
                                        {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}></Text> */}
                                        <Text>Get connected with local groups and events so you can meet new people and try new things.</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    }}
                /></View>}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    listItems:{
       
        fontSize:17
    },
    listStyle:{
       padding:10,
       margin:5,
       borderBottomColor:'blue'
    },
    setDiv: {
        margin: 0,
        padding: 0
    },
    cardImage: {
        height: 110,
        width: '100%',
        borderRadius: 5
    },
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#fff',
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#fff",
    },
    listContainer: {
        alignItems: 'center'
    },
    /******** card **************/
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor: "#e2e2e2",
        //flexBasis: '42%',
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    //   cardImage:{
    //     height: 50,
    //     width: 50,
    //     alignSelf:'center'
    //   },
    title: {
        fontSize: 24,
        flex: 1,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    eventList: {
        marginTop: 20,
    },
    eventBox: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
    },
    eventDate: {
        flexDirection: 'column',
    },
    eventDay: {
        fontSize: 20,
        color: "#0099FF",
        fontWeight: "600",
    },
    eventMonth: {
        fontSize: 16,
        color: "#0099FF",
        fontWeight: "600",
    },
    eventContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10
    },
    description: {
        fontSize: 15,
        color: "#646464",
    },
    eventTime: {
        fontSize: 18,
        color: "#151515",
    },
    userName: {
        fontSize: 16,
        color: "#151515"
    }
});      
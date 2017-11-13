import {connect} from 'react-redux';
import MyDiaryPageBody from '../components/diary/MyDiaryPageBody';
import actions from '../actions/diary';

const mapStateToProps = (state) => {
    return {
        Diary:state.Diary
    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        showAllDiarys:() => dispatch(actions.getAllDiarys())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MyDiaryPageBody)
import {
    getAllDriveFiles,
    deleteDuplicates,
    getSingleFile,
    saveTagData,
    updateTagData,
    deleteTagData,
  } from '../actions/tagIt-actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        appName: 'Tag-It',
        allDriveFiles: allDriveFiles,
        file:singleFile,
        comments: comments,
        tags: [],
        selectedTags: [],
    }
    this.getAllFiles = this.getAllFiles.bind(this);
  }


  getAllFiles(ev) {
    console.log(ev.target.value);
    let newState = {
      [ev.target.name]: parseInt(ev.target.value, 10)
    };
    this.setState(newState);
  }

  render() {
    return <div>
      
    </div>
  }
}

const mapStateToProps = state => ({
 
});

// TODO: find out what's up getState here.
const mapDispatchToProps = (dispatch, getState) => {
  return {
    
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

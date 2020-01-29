import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { IProject } from '../../../contracts/IProject';
import './Projects.scss';

interface IProps {
  project: IProject;
}

interface IState {
  project: IProject;
  hidden: boolean;
}

class Project extends React.Component<IProps> {
  state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      project: props.project,
      hidden: true
    };
  }

  /**
   * Set the read more/less state.
   */
  setReadMoreState() {
    this.setState((state: IState) => {
      return {
        ...state,
        hidden: state.hidden ? false : true
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <p className="section-message">{ this.state.project.projectTitle }</p>
        {
          this.state.project.paragraphs.map((paragraph: string, index: number) => {
            // If there is more than one paragraph, give the user the ability to "Read More/Less".
            if (index > 0) {
              return <p key={`paragraph-${index}`} className={this.state.hidden ? 'sub-message' : 'sub-message _shown'}>
                {paragraph}
              </p>;
            }
            return <p key={`paragraph-${index}`}>{paragraph}</p>;
          })
        }
        {
          this.state.project.paragraphs.length > 1 &&
            <div className="read-more-container">
              <p className="read-more-link link" onClick={() => this.setReadMoreState()}>
                Read { this.state.hidden ? 'More' : 'Less' }... { this.state.hidden ? <ExpandMoreIcon></ExpandMoreIcon> : <ExpandLessIcon></ExpandLessIcon> }
              </p>
            </div>
        }
      </React.Fragment>
    );
  }
}

export default Project;

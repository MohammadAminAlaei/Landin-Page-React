import {Component} from 'react';
import {History} from '../History/History.component';
import {DEFAULT_PROPS, PROP_TYPES} from './PublicRoute.config';

const TargetPage = ({Component}) => {
    return (
        <History onRender={
            props => {
                return (
                    <Component {...props} />
                )
            }
        }/>
    )
}

class PublicRoute extends Component {
    render() {
        const {component} = this.props;

        return (
            <TargetPage Component={component}/>
        );
    }
}

PublicRoute.defaultProps = DEFAULT_PROPS;
PublicRoute.propTypes = PROP_TYPES;

export {PublicRoute};

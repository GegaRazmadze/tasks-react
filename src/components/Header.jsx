import PropTypes from 'prop-types'

import Button from './button.jsx'

const Header = ({ title }) => {
        const onClick = (e) => {
        console.log(e)
    }
        return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add'
            onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'task traker 2',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// Css in Jsx
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header

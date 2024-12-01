import PropTypes from 'prop-types';
const Link = ({route}) => {
  return (
    <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
      <a className='' href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
    route: PropTypes.object
};


export default Link;

import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

const TableRow = ({ car }) => {
  const { rentPrice,availability,timePosted,carModel,image } = car;

  const day  = new Date(timePosted).getDate();
  const month  = new Date(timePosted).getMonth()+1;
  const year  = new Date(timePosted).getFullYear();

  const postedDate = `${day}/${month}/${year}`

  
  
  return (
    <tr>
      <td></td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt={carModel} />
            </div>
          </div>
          <div>
            <div className="font-bold">{carModel}</div>
            <div className="text-sm opacity-80"></div>
          </div>
        </div>
      </td>

      <td>
        <span className="font-bold">$ {rentPrice}</span>
      </td>
      <td>
        <span className={`badge badge-sm ${availability ? 'bg-green-100':'bg-red-100'}`}>
          {availability ? 'Available': 'Unavailable'}
        </span>
      </td>
      <td>
        <p>{postedDate}</p>
      </td>
      <td>
        <button className="p-2 mr-2 hover:scale-110 bg-primary text-white"><FaEdit/></button>
        <button className="p-2 mr-2 hover:scale-110 bg-red-800 text-white"><FaTrash/></button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  car: PropTypes.object,
};

export default TableRow;

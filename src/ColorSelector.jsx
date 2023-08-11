import './ColorSelector.css';

export default function ColorSelector({ selectedColor, setSelectedColor }) {
    const colors = ['holiday', 'work', 'errands', 'sick'];
  
    return (
      <div className="color-selector">
        {colors.map((color) => (
          <div
            key={color}
            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          >
            {color}
          </div>
        ))}
      </div>
    );
  }
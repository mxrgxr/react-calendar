import './ColorSelector.css';

export default function ColorSelector({ selectedColor, setSelectedColor }) {
    const colors = [
        { name: 'holiday', color: 'blue' },
        { name: 'work', color: 'green' },
        { name: 'errands', color: 'yellow' },
        { name: 'sick', color: 'red' },
    ];  
    
    return (
      <div className="color-selector">
        {colors.map((color) => (
            <div
            key={color.name}
            className={`color-option ${selectedColor === color.name ? 'selected' : ''}`}
            style={{ backgroundColor: color.color }}
            onClick={() => setSelectedColor(color.name)}
            >
                {color.name}
            </div>
        ))}
      </div>
    );
  }
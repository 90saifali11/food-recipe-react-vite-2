import React, { useState, useEffect } from 'react';
import { FaBookmark, FaShareAlt } from 'react-icons/fa';

const NutritionFacts = () => {
  const [nutritionData, setNutritionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNutritionData = () => {
      setTimeout(() => {
        const dummyNutritionData = [
          { name: 'Calories', value: '494 kcal' },
          { name: 'Carbs', value: '80g' },
          { name: 'Fat', value: '18g' },
          { name: 'Protein', value: '24g' },
          { name: 'Fiber', value: '23g' },
          { name: 'Net carbs', value: '56g' },
          { name: 'Sodium', value: '444mg' },
          { name: 'Cholesterol', value: '0mg' },
        ];
        setNutritionData(dummyNutritionData);
        setLoading(false);
      }, 1000);
    };

    fetchNutritionData();
  }, []);

  if (loading) return <div>Loading...</div>;

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '1rem auto',
      backgroundColor: '#f3f4f6', // gray-200 equivalent
      padding: '1.5rem', // p-6
      borderRadius: '0.75rem', // rounded-lg
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // shadow-md
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '1rem', // mb-4
    },
    button: {
      marginLeft: '0.5rem', // ml-2
      cursor: 'pointer',
      color: '#6b7280', // text-gray-600
      transition: 'color 0.2s',
    },
    buttonHover: {
      color: '#374151', // text-gray-800
    },
    tableContainer: {
      backgroundColor: '#f9fafb', // gray-100 equivalent
      padding: '1rem', // p-4
      borderRadius: '0.5rem', // rounded-md
    },
    table: {
      width: '100%',
    },
    row: {
      borderBottom: '1px solid #e5e7eb', // border-gray-200
    },
    cell: {
      padding: '0.5rem 0', // py-2
      color: '#6b7280', // text-gray-600
    },
    cellRight: {
      textAlign: 'right',
      fontWeight: '600', // font-semibold
    },
    title: {
      fontSize: '1.25rem', // text-xl
      fontWeight: 'bold', // font-bold
      marginBottom: '1rem', // mb-4
    },
    divider: {
      margin: '1rem 0', // my-4
      borderBottom: '1px solid #9ca3af', // border-gray-400
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonsContainer}>
        <FaBookmark style={styles.button} size={20} />
        <FaShareAlt style={styles.button} size={20} />
      </div>
      <div style={styles.tableContainer}>
        <h2 style={styles.title}>Nutrition Facts</h2>
        <table style={styles.table}>
          <tbody>
            {nutritionData.map((item, index) => (
              <tr key={index} style={styles.row}>
                <td style={styles.cell}>{item.name}</td>
                <td style={{ ...styles.cell, ...styles.cellRight }}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr style={styles.divider} />
      </div>
    </div>
  );
};

export default NutritionFacts;


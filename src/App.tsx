import React, { useState } from 'react';

const DifferenceFinder = () => {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [differences, setDifferences] = useState([]);

  const computeDifferences = () => {
    const itemsA = listA.split('\n').map(item => item.trim());
    const itemsB = listB.split('\n').map(item => item.trim());

    const presentOnlyInA = itemsA.filter(item => !itemsB.includes(item));
    const presentOnlyInB = itemsB.filter(item => !itemsA.includes(item));
    const presentInBoth = itemsA.filter(item => itemsB.includes(item));

    //const presentInBoth = itemsA.filter(item => itemsB.includes(item));

   // const presentInBoth = itemsA.filter(itemA => {
  //return itemsB.some(itemB => {
   // if (Array.isArray(itemA) && Array.isArray(itemB)) {
   //   return itemA.some(nestedItemA => itemB.includes(nestedItemA));
  //  }
   // return itemA === itemB;
  //});
//});

   // const presentInBoth = itemsA.reduce((result, itemA) => {
  //if (Array.isArray(itemA)) {
  //  const nestedItems = itemA.filter(nestedItemA =>
  //    itemsB.some(itemB => Array.isArray(itemB) ? itemB.includes(nestedItemA) : itemB === nestedItemA)
   // );
  //  return [...result, ...nestedItems];
 // }
  //if (itemsB.some(itemB => Array.isArray(itemB) ? itemB.includes(itemA) : itemB === itemA)) {
   // return [...result, itemA];
  //}
 // return result;
//}, []);


    const combined = [...itemsA, ...itemsB];

    setDifferences([presentOnlyInA, presentOnlyInB, presentInBoth , combined]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="listA" className="text-lg font-medium mb-2">List A:</label>
          <textarea id="listA" className="w-full h-48 p-2 border border-gray-300 rounded" value={listA} onChange={e => setListA(e.target.value)}></textarea>
        </div>
        <div>
          <label htmlFor="listB" className="text-lg font-medium mb-2">List B:</label>
          <textarea id="listB" className="w-full h-48 p-2 border border-gray-300 rounded" value={listB} onChange={e => setListB(e.target.value)}></textarea>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={computeDifferences}>Compute</button>

      {differences.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-medium mb-2">Results:</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Items present only in A:</h3>
              <ul>
                {differences[0].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Items present only in B:</h3>
              <ul>
                {differences[1].map((item, index) => (
                  <li key={index}>{item}</li>))}
                
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Items present in both A and B:</h3>
              <ul>             {differences[2].map((item, index) => (
    <li key={index}>{item}</li>
      )) }        
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Items combining both A and B (unique):</h3>
              <ul>
                {differences[3].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DifferenceFinder;

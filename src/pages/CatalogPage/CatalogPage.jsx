// CatalogPage.jsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers, applyFilters } from '../../redux/campersSlice';
import CamperCard from '../../components/CamperCard/CamperCard';
import Filters from '../../components/Filters/Filters';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const { filteredCampers, status, error } = useSelector(state => state.campers);
    const [visibleCampers, setVisibleCampers] = useState(4);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCampers());
        }
    }, [status, dispatch]);

    const handleFilterChange = (newFilters) => {
        dispatch(applyFilters(newFilters));
        setVisibleCampers(4);
    };

    const loadMore = () => {
        setVisibleCampers(prevVisible => prevVisible + 4);
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>
            <h2>Error occurred:</h2>
            <p>{error}</p>
            <p>Please try refreshing the page or contact support if the problem persists.</p>
        </div>;
    }


return (
        <main className={`${styles.catalogPage} ${styles.container}`}>
            <aside className={styles.filters}>
                <Filters onFilterChange={handleFilterChange} />
            </aside>
            <section className={styles.catalog}>
                {filteredCampers.length === 0 ? (
                    <p>No campers found. Try adjusting your filters.</p>
                ) : (
                    <>
                        <div className={styles.camperGrid}>
                            {filteredCampers.slice(0, visibleCampers).map(camper => (
                                <article key={camper.id}>
                                    <CamperCard camper={camper} />
                                </article>
                            ))}
                        </div>
                        {visibleCampers < filteredCampers.length && (
                            <button onClick={loadMore} className={styles.loadMoreButton}>
                                Load More
                            </button>
                        )}
                    </>
                )}
            </section>
        </main>
    );
};

export default CatalogPage;


//     return (
//         <div className={styles.catalogPage}>
//             <h1>Our Campers</h1>
//             <Filters onFilterChange={handleFilterChange} />
//             {filteredCampers.length === 0 ? (
//                 <p>No campers found. Try adjusting your filters.</p>
//             ) : (
//                 <>
//                     <div className={styles.camperGrid}>
//                         {filteredCampers.slice(0, visibleCampers).map(camper => (
//                             <CamperCard key={camper.id} camper={camper} />
//                         ))}
//                     </div>
//                     {visibleCampers < filteredCampers.length && (
//                         <button onClick={loadMore} className={styles.loadMoreButton}>
//                             Load More
//                         </button>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default CatalogPage;

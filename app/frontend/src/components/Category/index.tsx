/* eslint-disable max-len */
import { useContext, useRef, useEffect, useState } from 'react';
import { CategoryType } from '../../type';
import CategoryButton from '../CategoryButton/CategoryButton';
import Context from '../../context/Context';
import { ItemButton, InnerCarousel, Carousel } from './Category.styles';
import Loading from '../Loading/Loading';

export default function Category() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<any>();

  const { getCategories, getSelectedCategory, filter } = useContext(Context);
  const allCategories = getCategories();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [allCategories]);

  return (
    <section>
      { !allCategories ? <Loading /> : null }
      <Carousel ref={ carousel } className="carousel" whileTap={ { cursor: 'grabbing' } }>
        <InnerCarousel drag="x" dragConstraints={ { right: 0, left: -width - 20 } } className="inner-carousel">
          { allCategories && !filter.searchActive
            ? allCategories.map(
              ({ strCategory }: CategoryType, i) => (
                <ItemButton className="item" key={ strCategory }>
                  <CategoryButton
                    key={ `${strCategory}[${i}]` }
                    strCategory={ strCategory }
                    getSelectedCategory={ getSelectedCategory }
                  />
                </ItemButton>
              ),
            )
            : null }
        </InnerCarousel>
      </Carousel>
    </section>
  );
}

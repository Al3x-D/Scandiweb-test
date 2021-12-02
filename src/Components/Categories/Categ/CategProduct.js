import React from 'react';
import { NavLink } from 'react-router-dom';
import OverallData from '../../../Context';
import * as styles from './Categ.module.css';
import signIn from '../../../Utils/SignIn';
import creatAttributeOrdersList from '../../../Utils/CreatAttributeOrdersList';
import creatAttributeNameList from '../../../Utils/CreatAttributeNameList';

class CategProduct extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  signIn = () => signIn.call(this)

  creatAttributeNameList = (arg) => creatAttributeNameList.call(this, arg)

  creatAttributeOrdersList = (arg) => creatAttributeOrdersList.call(this, arg)

  render() {
    const { id, setCurrentProduct, gallery, item, prices, addToCart, currentCategoryData, attributes, displaySignIn } = this.props

    return (
      <section className={styles.categProduct}>
        <NavLink
          className={styles.prodLink}
          to={"/product/" + id}>
          <img
            onClick={() => setCurrentProduct(id)}
            className={styles.imgProd}
            src={gallery[0] || gallery}
            alt="#" />
          {!item.inStock ?
            <div className={styles.outOfstock}>
              <div className={styles.text}>OUT OF STOCK</div>
            </div> : <div></div>}
        </NavLink>

        <div className={styles.prodInf}>
          <h3 className={styles.prodTitle}>
            {item.brand}
            <span className={styles.subtitle}>
              {item.name}
            </span>
          </h3>

          <div className={styles.prodPrice}>
            <span>
              {this.context.currencySimbol}
            </span>
            <span className={styles.priceNumber}>
              {prices[this.context.currencyNumber].amount}
            </span>
          </div>
        </div>

        <div className={styles.prodAddWrapper}>
          <button onClick={() => {
            addToCart(item.inStock, id, this.creatAttributeNameList(currentCategoryData.attributes), this.creatAttributeOrdersList(currentCategoryData.attributes), attributes, (attributes[0] ? attributes[0].items : ''), prices.map(item => item.amount), gallery, item.name, item.brand);
          }}

            className={(item.inStock ? styles.prodAdd : styles.none)}>
            <span className={styles.cartIcon}> </span>

          </button>

          <button
            className={styles.prodSignIn}
            onClick={() => this.signIn()}
            style={displaySignIn === 'yes' ? { display: 'block' } : { display: 'none' }}
          >Press to sign in
          </button>
        </div>
      </section>
    );
  }
}

CategProduct.contextType = OverallData;

export default CategProduct;
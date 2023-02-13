import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/joy/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { HiOutlineXMark } from "react-icons/hi2";

import { addToCart, removeFromCart } from '../../actions/cartActions';
import '../../styles/cart/cart_page.scss'

const TVA = 0.21

export default function CartScreen() {
    const cartItems = useSelector(state => state.cart.cartItems);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const removeFromCartHandler = (slug) => {
        console.log(slug);
        dispatch(removeFromCart(slug));
    };

    const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);

    const checkoutHandler = () => {
        navigate ('/login?redirect=shipping')
    }

    return (
        <div className="container cart">
            <Grid container spacing={6} columns={16} sx={{ flexGrow: 1 }}>
                <Grid xs={12}>
                    <TableContainer className="table-container" component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Desc</TableCell>
                                    <TableCell align="center">Qty</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartItems.map(item => (
                                    <TableRow key={item.article}>
                                        <TableCell className="descr">
                                            <div className="article-descr">
                                                <img src={item.image} alt={item.name} />
                                                <h4>
                                                    <Link to={`/article/${item.article}`}>{item.name}</Link>
                                                </h4>
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">
                                            <select value={item.qty} onChange={(e) => dispatch(addToCart(item.article, Number
                                                (e.target.value)))}>
                                                {[...Array(item.countInStock).keys()].map(x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                            </select>
                                        </TableCell>
                                        <TableCell align="center">{parseFloat(item.price).toFixed(2)} &euro;</TableCell>
                                        <TableCell align="right">
                                            <HiOutlineXMark
                                                className="remove-icon"
                                                onClick={() => removeFromCartHandler(item.article)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid xs={4} className="total-container">
                    <h3>Total</h3>
                    <List className="total">
                        <ListItem>
                            <Typography variant="body2" color="text.secondary">Total: <span>{total} &euro;</span></Typography>
                        </ListItem>

                        <ListItem>
                            <Typography variant="body2" color="text.secondary">TVA (21%): <span>{parseFloat(total * TVA).toFixed(2)} &euro;</span></Typography>
                        </ListItem>

                        <Divider />

                        <ListItem>
                            <Typography variant="body2" color="text.secondary">Total: <span>{parseFloat(total * (1 + TVA)).toFixed(2)} &euro;</span> </Typography>
                        </ListItem>

                        <ListItem>
                            <Button variant="contained"
                                className="checkout-button"
                                onClick={checkoutHandler}
                                disabled={cartItems.length === 0} >PROCEED TO CHECKOUT</Button>
                        </ListItem>

                    </List>
                </Grid>
            </Grid>
        </div>
    )
}
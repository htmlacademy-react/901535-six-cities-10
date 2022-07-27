import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../store/reducer';
import { changeCity, OffersList } from '../store/action';

export const mapStateToProps = ({currentCity}: State) => ({selectedCity: currentCity});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onClickCity: changeCity, OffersList}, dispatch);

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

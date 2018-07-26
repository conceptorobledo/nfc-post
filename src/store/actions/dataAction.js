import { FETCH_PATROLS, POST_TO_PATROLS } from './types';

import { patrolsRef, homesRef } from '../../config/firebase';

export const fetchPatrols = () => async (dispatch) => {
    patrolsRef.limitToLast(5).on('child_added', snapshot => {
        const singlePatrol = snapshot.val();
        if (singlePatrol == null) {
            return false;
        }
        homesRef.child(singlePatrol.homeId).once('value', snap => {
            const singleHome = snap.val();
            const payload = {
                address: singleHome.address,
                status: singlePatrol.status,
                timestamp: singlePatrol.timestamp,
                key: snapshot.key
            }
            dispatch({
                type: FETCH_PATROLS,
                payload: payload
            });
        });
    });
}

export const postToPatrols = (homeId, timestamp) => (dispatch) => {
    console.log('action')
    const patrolData = { timestamp: timestamp, homeId: homeId, status: "actividad" };
    const pushNewPatrol = patrolsRef.push();
    homesRef.once('value', snapshot => {
        //TODO
        //Comparar keys con la keys a ingresar para revisar si existe
        const allHomes = Object.keys(snapshot.val());
        //Crea un arreglo con todas las key de hogares.
        const matchHome = allHomes.find((home) => {
            return home == homeId;
        });
        if (typeof matchHome !== 'undefined') {
            pushNewPatrol.set(patrolData);
            homesRef.child(homeId + '/patrols').push().set(pushNewPatrol.key);
            dispatch({
                type: POST_TO_PATROLS,
                response: { res: true }
            })
        }
        else {
            dispatch({
                type: POST_TO_PATROLS,
                response: { res: false, mgs: `El NFC ${homeId} no esta identificado.` }
            })
        }
    });
}
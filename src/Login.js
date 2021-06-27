import React from 'react'
import "./Login.css"
import {Button} from "@material-ui/core";
import { auth , provider} from './firebase';

function Login() {

    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then(result=>{
                console.log(result);
            })
            .catch((error)=>{
                alert(error.message)
            });
    }



















    return (
        <div className="login">
        
            <div className="login__container">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAnFBMVEX///8ICAgJCQkKCgoLCwsHBwcMDAwNDQ0ODg7nGU4PDw8GBgYQEBARERG+FkHaGErh4eGwFT14ESzMF0UkChH5+fmYmJi4uLhKSkoWFhZTU1MpKSmxsbHQ0NCPj4/w8PBsbGyoqKh1dXXBwcEvLy9oaGgdHR1OTk43Nzfm5uZAQEBfX1+AgIDLy8ufn5+QkJCSFDSmFDqGEjBqDycKF8WzAAALhUlEQVR4nM3daXfqOBIGYHMNxhMu0/T0kJUtG1kgyfTM//9vg3eV6tVmSYb61Oe0bw5PSiqVZHFvMtfEbxhXIHIcUxgZijGMFMYvEIkOgiWeEMhwcgSC2DMUGTkDxDYfsUaWg0MLsR5YCoiDI25GrB3+EG9HGIj3DHEaWc4ZiTKyAgws54x4DqxoCYEODeTcAysQ5PeAEDeHK8R3hgy5qjtDXBwXAonjcBlZDv2iGoLHlUu3GG2qO0Ec5keAkjU0xMkxdO31hqgcw4+s0YAQF0c8CB5ZA29xlZDRCEEuoGS5JgRBApSswaf6CGYkkkMxsPz3uCqIQ0b8IYqB5bqsW0NiDSw3htYhQwLkw6H2RoQESEi8jGhWEbuMRCtZgdoTkBH7keU/0Z0duuJLIFgRrWKpIM7jimfEwTH8oq6dIBYZCTHR4/bvDOKSjyCLeqCZbpeRq3gbw0B79dFIguCDrBAzPeoWdyRDFIoQCYm6M2QZcZkgEdfCfouhAMEzPV77Hrj2tpAgFStAyeo/suJDQsx0a0gQh0vJCjWwOkcBcZofIQ5OIsyQKiPxJnqYmW4LiTiwhkvICeI0smImxBPiNkNCOEJtqGwgjhM9SJPlsYYoISpHmBkS7Nw6POQ8JcucEcd0BFkLvRZDN4irw21cXQIk5ky3dgCI60SPuhZGgFz2wDJC5suExbMMeZKf2MmQR/ZDtrXgP39ax99OEDkRaw5ZyAm5lp/4kSFf/LdRQ/75D+v4Q+cwQvjvMknm0sC6kR9YySNry37GtR+EOWQImxps2JziRZogC/mBteS44z/jyQvCHRKEz/F7AHmjjis2j5YS5J3/jNuhIQ8AsqMQ8MgDhYDfxt4HAhwEAssuH97JD4Xcgt83hfDx+TGOCMHrBy84yYouITv+xCuFsLLWFq1eEOQwQ775x1xTyIY/saEQVtbaohUDgh2obG3pkr4COaMQVtaS1+EzAmZAsietCVgzaf2d8vbgMx4EM/J8DyCfBALKwZZAQFm784BARwtRDKzTB/7gH+MgOpA02YsQntTFuDcEMxqIglG2vM/8Yx5FyCeCfIqQV/a/b9quNyxE58h57Uy+xeb9gCCk/vKytukPUUkS9XvCeguy4x/zWdyEHBHkKEJ443mIA9E6cjB0FuIWCiw0SfIoQvia+t7upxDkDxx/6UZWObT0ENC6JnMBAuZQknyJEF4u5u2+EED+ZX2WZZWRrlXny1nyIkBAVaP1l/8mFt321hGiy4hhZOU5bzCSt86BEpaQ+sub+JUB0iMho8ToyEEvtesgYK9RhFB/eRN/PA+ELwPJpoOgndcpDh2Ed2uH7uAEQXoMLCVEPF4Av/NVB0F74USov+MxX4heekI0DhsImAXrDgLWyyIeOwibY8u8O8mKDMlJ8LK17SCgFBTx3DrG/GxCOJFzgWgYkwmEUEcONhz7FgKKcxEfbUYy1sQ/hoeMIERy5KAJ+Wwc/AiljrsmIbyJPwpHpA4QbUIQRHbkoC08NBB0ylLGewPhTfx9L4g2H3YQULaODQRtICtqVh9Z8+r9IJxZR4QwRw5Osr8byE4FOTYQNjC3WdoDolFYQ3K+K39uIGDZr6nNOwTWxH+Ne0B06SgcHAIcOd9QtI08qGg1tXkXwpr47/gQhFCUraaRB0coNbWBsO74KQ0LKR1SRhQQ0E81jTw4QmmolYP3Bbc9IEaHXUZe+MesG3l4hFJTKwgveXt3iM4BMqJy5OAku27k4RFKFfcVhGVzmzpDRmrJpInEzDgF33XXjTxZK+lsqF/lsO742QSBe/ZAEH7AUDXyGSkDtH+sz6lZd3xthKAwOTqIzgE2HVUjnxEhXVPqQzjWHe/iQnLtFY03Bikb+SwjRyi0J6uPRVl3/BkQMgEQXUJQa7gvX0GTj0mfWl4VDt7E30XMiC4duWK5+Cwgc5Ik6S30wxg18R9pPIguGzWEn8IdioSQBWYtHSmWL25Zfb4JCZGHltEBduZP7KRnldHGq3wrxfYyPwEhEwqxSAjo1q/ZSc8m+yFPbGAT/3oeiHr/dFNAyCffSSdYxdZ8zFag93CQCYXYOEBPVb4mJGPpVjpT/CogbHLdxYJYOcBRdXlMTZr4Bzr3q0sB8jKySINBJtYQwQGOr4pjanGRWGbZb7ponBr5K/lPrc4AER3TH/kTFcckZMCt5fWxaOTZMrIZHkIcU34Wcp9lZJEoLgnQvL2Bs6BDKMhkYgmhDrDxeJJe126yTGp1d+As6P3cEL5j/cloE/96gtD6e1pI5EOW5dXQkKkcrItdSa9ri46Edskrfha0Ts2Q//4bhKRgDhWEOfi5z1pq4vesRfziZ0GPkuOXequLVg5lPhQQzgAncVv6ura8/0qvz2z5WdCRMn6pIVqHD4SfZN+RJn5dbqPoMdfdb/nP3A8JQQz00vOdLORlZzWmA/CdLSMvthBHhgOEn2Tfk0Wiul5C1817uWgvM8nRC4IcHIIZU3A4uiOLRHUnbkefkA+11rLjHBB2kr0hy0h1J46u5BvqkoqWDuLsYBClg98CeiR7jeoiL50UK7nUPckOBcR5hjCI2sFvBjyLnVX97QNaf7/kbdWb7ICQHgwZonFM2Un2Wlzt1vVLBDKTFnLz/2AF6TGwKETHyLJcLltbsWtZjcHB4lIqEFvmiJMRrUPaDpafU/jv5nLftfKJU3wxhyME9Fgcos8HvNEnRHMjWXE1pYpv5nDNiNLhAoGXF5tovkbBT4mFePKGmDOiY9QQxYWmKh5qCHi5JWiZI3hGTIgilJccTrGsHWPllY4i9szhOkdMEGM2ylC/+GyrL3iN0MUHT4gbROMwQ7TXXttYtRDFtacinrnDCaJzlBC7fGQZvOFbxU8LUVxEK+KaMcJCbB3gcmIbuxaie8gLomUUEGsH+NZBG7ctRFPbPrkjIMTekWluBzy0EE39vTsXJJMDXrouYjltIXPVM9X59TkgzJHBa/BFdNVXU39v0FVxW4iBMZupIdwBvobXfEYBotRuOMMaYnDoIMCR7VSfsf023jhNldrXeJCZGoIcmfIKTfMV4vQEUdbf9/4QU0I0GYEQxTcTyhcIdT7SVFl/59EgM9eMgG9GVvEiQBRfX0gWyGEHsXAoIJiBvqtaRnVbo77Nq6q/q94Q87hSQVQO8P216pctONJUsdocY0FmCohSkaFvFJZxIzpSRf099IVYJcQRohj/16IjVTTJL/0gJkbt4BCdQ9V/PImOFO/tl9NBIToG/C5IGffkL2iBXxVN1tARCaJllBeS8cXrFwLB4++xH8RO4QQpJzQeNnPRkeJlExetM0DqbdMCxJf0V/+s0UNvGPL3Xyz+51yxZIjZoYhUFxjQBFvFe1ReCdKboXfoICPNFWuXiU4g5vkRPh/6dDhMkA6iZWghvdPhPa4AxMDQJiSaw2WCWEH080ML0TvCzQ8rSH9G3ITMOMRjYHkwgk4QC8iF5gMNrd7p8HEYGK4zvYBEyofXuHIfWHqIluHlCFt5TRCP6eE3P0yQ2cwpIx758J0gw0Fi5sM4P9DAUkP0+fBqTHxXECdIvHEVY6LHgZgYni2WE8QnHbFniMKBID7TI3LhVTvcIed1OEAM+fBqFH33tgEhl5oPBvFLx8VAvBiedddrXEkQxb9Easfwnh9e+SCQ8+bDMyEdxMAwJiR6PgJBzu/QMjpIVEf0dHSQM+fDPyEVxDQ/zp8QE6OERGaEyIfZcYL4OkyMAHvbIBBTOsz58N7a2jhmia/j7AtIKIjBEWBBt3IYIN6MwRx6SPR0hHPoIKlnvQqSD0uGDmJMxxDrub2kN2SIdDgkRAkxjSt/hxXEe2j5DqsLgQzBCNJgGSBGh3/ZDZwODDE7AkACriAKiL/ChhF6YHHIII7Qw4pDAoyqi4BYOIaqu64OAgnCGOSkwRsSQhEnIQIkQD7MjAgLSB3/ByYQQ7pHd8wqAAAAAElFTkSuQmCC" 

                />
                <h1>Sign In to WorkFork</h1>
                <p> WorkFork is a messaging app for business that connects people to the information they need.</p>
                <Button onClick={signIn}>Sign In with Google</Button>
                {/* <Button  className="dev__buton" href="http://shubhaaam.s3-website.us-east-2.amazonaws.com/">Reach Developer</Button> */}

            </div>
        </div>
    )
}

export default Login

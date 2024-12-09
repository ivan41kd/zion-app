const levels = [
 {
  level: 1,
  profit: 5,
  img: `<svg width="69" height="73" viewBox="0 0 69 73" fill="none" xmlns="http://www.w3.org/2000/svg" class='dashboard__level-profit-logo'>
  <g clip-path="url(#clip0_9_2)">
  <path d="M29.3062 1.59934L4.74312 16.9415C1.78648 18.7882 0 21.9638 0 25.3728V54.9077C0 59.2091 2.82978 63.0316 7.03416 64.4096L31.6303 72.4713C33.8106 73.1859 36.1744 73.1758 38.3481 72.4427L62.052 64.4476C66.2121 63.0445 69 59.2433 69 54.9743V25.2877C69 21.9254 67.2618 18.7868 64.3706 16.9285L40.6337 1.67138C37.2077 -0.530694 32.7617 -0.55897 29.3062 1.59934Z" fill="url(#paint0_linear_9_2)"/>
  <g filter="url(#filter0_i_9_2)">
  <path d="M29.2681 4.42204L6.97008 18.3708C4.01693 20.2182 2.23303 23.3918 2.23303 26.7983V53.2401C2.23303 57.7455 5.33259 61.6981 9.81164 62.9045L32.1507 68.9213C33.9892 69.4165 35.9333 69.4094 37.768 68.9009L59.2629 62.9432C63.7049 61.712 66.767 57.7767 66.767 53.2992V26.7132C66.767 23.3534 65.0314 20.2168 62.1437 18.3578L40.6077 4.49421C37.179 2.28696 32.7265 2.25862 29.2681 4.42204Z" fill="url(#paint1_linear_9_2)"/>
  </g>
  <g filter="url(#filter1_d_9_2)">
  <path d="M26.809 37.2168C26.7806 36.9672 26.809 36.6992 26.7996 36.4219C26.7996 36.2832 26.828 36.1261 26.8754 35.9782C26.9133 35.8396 26.9133 35.6917 26.9417 35.5623C26.9986 35.3127 27.0744 35.0724 27.1313 34.8228C27.2261 34.4161 27.4062 34.0371 27.5673 33.6489C27.7284 33.2514 27.9559 32.8817 28.1833 32.512C28.4013 32.1515 28.6667 31.828 28.951 31.5045C29.3491 31.07 29.7756 30.6541 30.1832 30.2289C30.4675 29.9331 30.7613 29.6558 31.0457 29.3693C31.5954 28.8332 32.1546 28.297 32.6853 27.7424C33.254 27.1601 33.8322 26.5963 34.4103 26.014C34.6662 25.7551 34.9506 25.5148 35.197 25.2375C35.6045 24.7754 36.0689 24.3687 36.5049 23.9342C36.7514 23.6939 36.9978 23.4536 37.2347 23.204C37.8034 22.6032 38.4289 22.0578 38.9976 21.4478C39.4715 20.9394 39.9928 20.468 40.4762 19.9689C40.8458 19.5899 41.2154 19.2202 41.5756 18.8504C41.8884 18.5362 42.2296 18.2681 42.5708 17.9908C42.912 17.7135 43.2816 17.4917 43.6607 17.2698C44.0683 17.0387 44.5138 16.8539 44.9592 16.6967C45.1583 16.632 45.3478 16.5396 45.5469 16.5026C45.7175 16.4749 45.8786 16.4194 46.0492 16.401C46.3146 16.3732 46.5705 16.3178 46.8358 16.2808C47.2339 16.2253 47.6415 16.2253 48.0395 16.2253C48.5513 16.2253 49.0537 16.2993 49.5465 16.3917C50.0962 16.4934 50.627 16.6413 51.1293 16.8631C51.6222 17.0757 52.1056 17.3345 52.5605 17.6303C53.0818 17.9816 53.5652 18.379 54.0106 18.8227C54.4087 19.2109 54.7309 19.6546 55.0532 20.0983C55.4607 20.6806 55.7545 21.3276 56.001 21.9931C56.2095 22.5662 56.3422 23.1485 56.418 23.7494C56.4559 24.0914 56.5033 24.4334 56.4938 24.7846C56.4843 25.1451 56.4938 25.5056 56.437 25.8661C56.3706 26.282 56.3137 26.7072 56.2 27.1139C56.0578 27.613 55.8872 28.1029 55.6598 28.5651C55.2712 29.397 54.7594 30.1365 54.1244 30.8112C53.6884 31.2826 53.2239 31.7355 52.769 32.1792C52.3046 32.6229 51.8591 33.0851 51.4231 33.5472C51.2336 33.7506 51.044 33.9539 50.826 34.1295C50.7028 34.2405 50.5891 34.3699 50.4754 34.4808C50.3901 34.564 50.3048 34.6379 50.2195 34.7211C49.7456 35.2018 49.2622 35.6639 48.7978 36.1538C48.5419 36.4219 48.286 36.6899 48.0301 36.9487C47.5941 37.3832 47.1581 37.8176 46.7126 38.252C46.2672 38.6865 45.8122 39.1117 45.3857 39.5646C44.7981 40.1839 44.182 40.7847 43.5849 41.404C43.2058 41.7922 42.7983 42.1619 42.4097 42.5409C42.0211 42.9199 41.6325 43.2989 41.2439 43.6778C41.0259 43.8904 40.77 44.0661 40.533 44.2509C40.2013 44.5005 39.8506 44.7223 39.481 44.9072C38.9028 45.1937 38.2963 45.4248 37.6707 45.6004C37.2916 45.7021 36.8935 45.7576 36.5049 45.8315C36.4007 45.85 36.2869 45.85 36.1827 45.8593C35.6709 45.8962 35.1591 45.85 34.6473 45.85C34.4956 45.85 34.344 45.8038 34.1923 45.7853C34.0122 45.7576 33.8322 45.7114 33.6521 45.6744C33.3393 45.6097 33.036 45.5173 32.7327 45.4341C32.3726 45.3324 32.0314 45.166 31.6902 45.0181C31.4627 44.9164 31.2637 44.7685 31.0457 44.6576C30.8656 44.5652 30.7045 44.4543 30.5433 44.3434C30.3253 44.177 30.1074 44.0106 29.8988 43.8442C29.605 43.6039 29.3302 43.3358 29.0743 43.0585C28.9131 42.8737 28.7425 42.6981 28.5909 42.5039C28.3255 42.1619 28.1075 41.7922 27.899 41.4225C27.7 41.062 27.5009 40.7015 27.3682 40.3133C27.2261 39.9251 27.1313 39.5276 27.0081 39.1394C26.9607 38.9823 26.9607 38.8066 26.9228 38.6403C26.8185 38.1689 26.7901 37.7067 26.809 37.2168ZM32.1451 43.3913C32.1735 43.3451 32.1641 43.3081 32.1641 43.2711C32.1641 42.8459 32.1641 42.4208 32.1641 42.0048C32.1641 39.8142 32.1641 37.6327 32.1641 35.4421C32.1641 35.3681 32.1735 35.3219 32.2683 35.3219C32.9602 35.3219 33.6521 35.3219 34.344 35.3312C34.4388 35.3312 34.4767 35.3127 34.4672 35.211C34.4672 34.3514 34.4672 33.4825 34.4672 32.6229C34.4672 32.0221 34.4672 31.4305 34.4672 30.8297C34.4672 30.6818 34.4672 30.6818 34.6283 30.6726C34.7136 30.6726 34.8084 30.6818 34.8937 30.6541C34.9411 30.6448 35.0074 30.6726 35.0169 30.7465C35.0169 30.8389 35.0359 30.9221 35.0359 31.0053C35.0359 32.4011 35.0359 33.7968 35.0359 35.2018C35.0359 35.2942 35.0643 35.3219 35.1591 35.3127C35.851 35.3127 36.5428 35.3127 37.2347 35.3034C37.3295 35.3034 37.3579 35.3219 37.3579 35.4144C37.3579 37.9193 37.3579 40.4242 37.3579 42.9199C37.3579 43.2249 37.3579 43.5392 37.3579 43.8442C37.3579 43.9182 37.3769 43.9459 37.4622 43.9182C37.5759 43.8812 37.6897 43.8627 37.7939 43.8165C37.993 43.7333 38.2015 43.6594 38.4005 43.5577C38.628 43.4375 38.8649 43.3358 39.0924 43.2064C39.3673 43.0493 39.6137 42.8737 39.8696 42.6796C40.0212 42.5687 40.1634 42.4577 40.0971 42.2359C40.0971 42.2266 40.0971 42.2174 40.0971 42.1989C40.0971 38.5109 40.1065 34.8136 40.1065 31.1255C40.1065 29.9701 40.1065 28.8147 40.1065 27.6593C40.1065 27.5114 40.1065 27.5114 40.2582 27.5114C40.9216 27.5114 41.5946 27.5114 42.258 27.5114C42.3718 27.5114 42.4097 27.4744 42.4097 27.3635C42.4002 26.6055 42.4097 25.8383 42.4097 25.0804C42.4097 24.3871 42.4097 23.6939 42.4097 23.0007C42.4097 22.8897 42.4476 22.862 42.5518 22.862C42.6561 22.8712 42.7603 22.8712 42.8551 22.862C42.9404 22.8528 42.9594 22.8897 42.9594 22.9637C42.9594 24.4056 42.9594 25.8476 42.9594 27.2988C42.9594 27.345 42.9689 27.3912 42.9499 27.4282C42.912 27.5114 42.9594 27.5114 43.0163 27.5114C43.1869 27.5114 43.3669 27.5114 43.5375 27.5114C44.0683 27.5114 44.5991 27.5114 45.1203 27.5114C45.2151 27.5114 45.253 27.5391 45.253 27.6315C45.2436 27.7517 45.2436 27.8811 45.2436 28.0013C45.2436 31.0515 45.2436 34.0926 45.2436 37.1429C45.2436 37.1798 45.2436 37.2076 45.253 37.2445C45.2815 37.3185 45.3004 37.3277 45.3573 37.2723C45.471 37.1521 45.5848 37.0412 45.6985 36.9303C46.3051 36.3202 46.9211 35.7101 47.5277 35.1001C48.2765 34.3514 49.0252 33.6027 49.7835 32.854C49.8403 32.7985 49.8593 32.7338 49.8593 32.6599C49.8593 31.5507 49.8593 30.4322 49.8593 29.323C49.8593 29.2306 49.8309 29.2029 49.7361 29.2029C49.0726 29.2121 48.4092 29.2029 47.7457 29.2029C47.5656 29.2029 47.5562 29.2399 47.5562 29.0273C47.5562 25.7182 47.5562 22.3998 47.5562 19.0908C47.5562 19.0076 47.5183 18.9336 47.5277 18.8504C47.5751 18.5824 47.5467 18.3051 47.5467 18.037C47.5467 17.8522 47.5372 17.8522 47.3571 17.8614C47.3287 17.8614 47.2908 17.8614 47.2623 17.8614C47.0633 17.8799 46.8643 17.8799 46.6652 17.9169C46.2293 18 45.7933 18.111 45.3668 18.2681C44.8739 18.4437 44.4095 18.6748 43.983 18.9613C43.4522 19.3126 42.9878 19.7563 42.5329 20.1999C42.1443 20.5789 41.7746 20.9579 41.3861 21.3369C41.2249 21.494 41.0638 21.6419 40.9122 21.799C40.4383 22.2797 39.9644 22.7696 39.4905 23.2595C39.3767 23.3796 39.263 23.5183 39.1398 23.6292C38.8839 23.8695 38.6469 24.1191 38.391 24.3594C37.6992 25.0249 37.0073 25.6997 36.3533 26.4022C35.9647 26.8181 35.5571 27.2063 35.1496 27.6038C34.4672 28.2786 33.7658 28.9441 33.0929 29.6281C32.4105 30.3213 31.7376 31.0146 31.0457 31.6986C30.5528 32.1885 30.0505 32.6691 29.6714 33.2607C29.3965 33.6766 29.1501 34.1111 28.9605 34.5732C28.7141 35.174 28.5625 35.7933 28.4961 36.4311C28.4203 37.1429 28.4298 37.8546 28.5814 38.5571C28.6857 39.0377 28.8278 39.5091 29.0079 39.9713C29.1027 40.2209 29.2449 40.4519 29.3776 40.683C30.0505 41.8477 30.9604 42.7443 32.1451 43.3913ZM52.6932 19.8025C52.6837 19.8579 52.6837 19.8857 52.6837 19.9134C52.6837 21.3923 52.6837 22.862 52.6837 24.3409C52.6837 25.9215 52.6837 27.5021 52.6837 29.092C52.6837 29.1936 52.6648 29.2399 52.5415 29.2399C51.8591 29.2306 51.1862 29.2399 50.5038 29.2399C50.3995 29.2399 50.3711 29.2768 50.3711 29.3693C50.3711 30.2751 50.3711 31.1902 50.3711 32.096C50.3711 32.1422 50.3711 32.1885 50.3711 32.2347C50.6175 32.0036 50.8545 31.7818 51.0914 31.5507C51.48 31.1625 51.8686 30.7742 52.2572 30.386C52.7311 29.9146 53.2145 29.4525 53.5936 28.8979C54.3423 27.8072 54.7404 26.5963 54.8257 25.293C54.8731 24.5443 54.7878 23.8048 54.5982 23.0746C54.3992 22.3074 54.077 21.5957 53.622 20.9394C53.3661 20.5235 53.0439 20.1815 52.6932 19.8025Z" fill="url(#paint2_linear_9_2)"/>
  </g>
  <g filter="url(#filter2_d_9_2)">
  <path d="M25.4464 41.1126C25.3424 41.0758 25.2857 41.0024 25.2385 40.9381C25.0684 40.7178 24.8605 40.525 24.6716 40.3231C24.4448 40.0752 24.2086 39.8273 23.9629 39.5887C23.4904 39.1205 23.018 38.6523 22.5455 38.1841C22.2715 37.9087 21.9975 37.6425 21.7235 37.3763C21.4967 37.1559 21.2888 36.9173 21.0621 36.7061C20.9581 36.6051 20.8636 36.4858 20.7313 36.4032C20.618 36.3389 20.5802 36.2012 20.4762 36.1094C20.1739 35.8432 19.9093 35.5494 19.6069 35.2832C19.3707 35.0721 19.1817 34.8058 18.9455 34.5947C18.7943 34.4662 18.662 34.3101 18.5014 34.1908C18.4258 34.1449 18.3975 34.0439 18.3313 33.9796C18.0195 33.6859 17.7077 33.4013 17.4148 33.0892C17.0179 32.6577 16.5833 32.263 16.1864 31.8315C15.8935 31.5194 15.5722 31.2256 15.2699 30.9227C14.8258 30.4728 14.4194 29.9863 14.0698 29.463C13.8998 29.206 13.7675 28.9306 13.6163 28.6644C13.4746 28.4165 13.3895 28.1503 13.2761 27.9024C13.1249 27.5903 13.0777 27.2598 12.9738 26.9385C12.9076 26.7182 12.8793 26.4887 12.832 26.2684C12.7186 25.6533 12.747 25.0382 12.7281 24.414C12.7281 24.2487 12.747 24.0835 12.7375 23.9183C12.7375 23.7897 12.7942 23.652 12.8131 23.5143C12.832 23.4317 12.8226 23.3399 12.832 23.2573C12.8509 23.1196 12.8982 22.9911 12.936 22.8534C13.0494 22.3852 13.2005 21.9354 13.3801 21.4855C13.484 21.2193 13.5879 20.9439 13.7486 20.7052C13.9565 20.3931 14.1454 20.0626 14.3722 19.7689C14.599 19.4659 14.8258 19.163 15.0998 18.8967C15.336 18.6581 15.5817 18.4286 15.8462 18.2082C16.2714 17.841 16.7344 17.5197 17.2352 17.2535C17.5376 17.0975 17.8494 16.9506 18.1612 16.8129C18.388 16.7119 18.6148 16.6293 18.8605 16.5742C19.0494 16.5283 19.2195 16.4457 19.4179 16.4273C19.7203 16.3998 20.0038 16.3263 20.2967 16.2804C20.7219 16.2253 21.1471 16.2253 21.5723 16.2253C21.7424 16.2253 21.9125 16.2253 22.0731 16.2345C22.2432 16.2437 22.4133 16.2712 22.5833 16.2988C22.8196 16.3355 23.0558 16.4273 23.3015 16.4365C23.5188 16.4457 23.6983 16.5558 23.8967 16.6017C24.2747 16.6843 24.6149 16.8588 24.9645 17.0056C25.3897 17.1893 25.7771 17.4188 26.155 17.6758C26.4291 17.8594 26.7125 18.043 26.9676 18.2633C27.1472 18.4194 27.3173 18.5846 27.4779 18.7499C28.007 19.2731 28.5362 19.7964 29.0653 20.3197C29.6417 20.898 30.2181 21.4855 30.8039 22.0547C31.522 22.7524 32.2118 23.4868 32.9394 24.1753C32.9677 24.2028 32.9961 24.2304 33.0244 24.2579C33.0622 24.2946 33.0528 24.3314 33.015 24.3681C32.7504 24.6251 32.4953 24.873 32.2307 25.13C32.1457 25.2218 32.0417 25.3044 31.9661 25.3962C31.9 25.4697 31.8527 25.433 31.8055 25.3962C31.5976 25.1943 31.3709 25.0015 31.1913 24.772C31.0023 24.5425 30.7567 24.3773 30.5866 24.1386C30.511 24.0376 30.3976 23.9642 30.3126 23.8724C29.9535 23.5143 29.6039 23.1379 29.2354 22.7983C28.9047 22.4862 28.5929 22.1465 28.2621 21.8252C28.0354 21.6049 27.7897 21.4029 27.5818 21.1642C27.2984 20.8337 26.9771 20.5492 26.6747 20.237C26.344 19.8974 26.0133 19.5577 25.6259 19.2731C25.3991 19.1079 25.1629 18.9426 24.9078 18.8049C24.6999 18.6856 24.4826 18.5846 24.2747 18.4745C24.0763 18.3735 23.8684 18.2909 23.6511 18.2266C23.4715 18.1715 23.2826 18.1073 23.0936 18.0614C22.8007 17.9879 22.5077 17.942 22.2148 17.8961C22.0636 17.8686 21.9125 17.8778 21.7613 17.8686C21.6668 17.8594 21.6479 17.8961 21.6479 17.9787C21.6479 18.2633 21.6479 18.5479 21.6479 18.8233C21.6479 19.7138 21.6479 20.6042 21.6479 21.4947C21.6479 23.6337 21.6573 25.7818 21.6479 27.9208C21.6479 28.288 21.6668 28.6552 21.6573 29.0316C21.6573 29.105 21.6479 29.1509 21.544 29.1509C20.8636 29.1509 20.1833 29.1509 19.503 29.1509C19.3896 29.1509 19.3612 29.1876 19.3612 29.3253C19.3612 30.3076 19.3612 31.2807 19.3612 32.263C19.3612 32.3823 19.3707 32.5016 19.3518 32.621C19.3423 32.6669 19.3612 32.6944 19.3896 32.7311C20.0321 33.3646 20.6746 33.998 21.3172 34.6406C22.0164 35.3383 22.7156 36.036 23.4148 36.7337C23.5849 36.8989 23.7645 37.055 23.944 37.2202C23.944 36.9448 23.944 36.6602 23.944 36.3756C23.944 33.4472 23.944 30.5279 23.944 27.5995C23.944 27.4985 23.9818 27.4709 24.0763 27.4709C24.7566 27.4709 25.4369 27.4709 26.1172 27.4709C26.2306 27.4709 26.2495 27.4342 26.2495 27.3332C26.2495 25.892 26.2495 24.4599 26.2495 23.0186C26.2495 22.8534 26.2495 22.8534 26.4196 22.8534C26.4952 22.8534 26.5802 22.8625 26.6558 22.8534C26.7598 22.8442 26.7976 22.8809 26.7976 22.9911C26.7976 23.5143 26.7976 24.0376 26.7976 24.5609C26.7976 25.4972 26.7976 26.4244 26.7976 27.3608C26.7976 27.4618 26.8354 27.4985 26.9298 27.4618C26.996 27.4342 27.0621 27.4709 27.1188 27.4709C27.733 27.4709 28.3377 27.4709 28.9519 27.4709C29.0559 27.4709 29.1126 27.4985 29.0842 27.6086C29.0464 27.8198 29.0653 28.0309 29.0653 28.2329C29.0653 28.288 29.0464 28.3247 29.0086 28.3614C28.7913 28.5634 28.6023 28.7745 28.385 28.9765C28.1488 29.206 27.9125 29.4355 27.6763 29.6742C27.4117 29.9312 27.1755 30.2066 26.9487 30.4912C26.7881 30.6932 26.6369 30.8951 26.4952 31.1063C26.2495 31.4643 26.0133 31.8315 25.8243 32.2262C25.6448 32.5934 25.4747 32.9698 25.333 33.3554C25.2101 33.695 25.0779 34.0255 25.0023 34.3744C24.9361 34.6865 24.8511 34.9894 24.8038 35.3016C24.7755 35.5127 24.7566 35.7238 24.7282 35.935C24.6904 36.2196 24.681 36.495 24.6621 36.7796C24.6432 37.0458 24.6338 37.312 24.6716 37.5782C24.6904 37.7067 24.681 37.8444 24.6904 37.973C24.7188 38.23 24.7471 38.4871 24.7849 38.7349C24.8511 39.1939 24.9739 39.6437 25.0968 40.0844C25.1629 40.3231 25.2385 40.5526 25.3424 40.7729C25.3708 40.8831 25.4275 40.984 25.4464 41.1126ZM18.766 32.0702C18.766 32.0518 18.7754 32.0426 18.7754 32.0335C18.7754 31.1338 18.7754 30.2342 18.7754 29.3345C18.7754 29.105 18.7754 29.1142 18.5486 29.1234C17.8967 29.1509 17.2541 29.1325 16.6022 29.1325C16.5171 29.1325 16.4793 29.105 16.4793 29.0132C16.4793 26.0113 16.4793 23.0002 16.4793 19.9984C16.4793 19.9433 16.5077 19.8607 16.4604 19.8423C16.4132 19.8239 16.3848 19.9066 16.347 19.9433C15.9218 20.338 15.5911 20.8062 15.2982 21.2928C14.9013 21.9629 14.6462 22.6789 14.4856 23.4317C14.3344 24.1386 14.325 24.8546 14.3817 25.5707C14.41 25.9195 14.495 26.2592 14.5706 26.5988C14.7596 27.3608 15.0998 28.0677 15.5439 28.7194C15.9124 29.2702 16.3754 29.7384 16.8573 30.2066C17.1218 30.4728 17.3864 30.7391 17.651 31.0053C17.9723 31.3174 18.2935 31.6295 18.6053 31.9508C18.6526 31.9967 18.6998 32.0426 18.766 32.0702Z" fill="url(#paint3_linear_9_2)"/>
  </g>
  <path d="M0 58.2677C0 58.2677 15.5309 63.1667 34.3814 63.1667C53.232 63.1667 69 58.2677 69 58.2677V41.3092C69 41.3092 48.2839 47.9215 34.3814 47.9042C20.5691 47.887 0 41.3092 0 41.3092V58.2677Z" fill="url(#paint4_linear_9_2)"/>
  <path d="M33.4951 53.2312H35.4378V59.5071H33.4951V53.2312Z" fill="#F2BEA2"/>
  </g>
  <defs>
  <filter id="filter0_i_9_2" x="2.23303" y="2.81891" width="66.534" height="67.4686" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="2" dy="1"/>
  <feGaussianBlur stdDeviation="1"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9_2"/>
  </filter>
  <filter id="filter1_d_9_2" x="26.196" y="16.2253" width="32.899" height="33.2483" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="1" dy="2"/>
  <feGaussianBlur stdDeviation="0.8"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_2"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_2" result="shape"/>
  </filter>
  <filter id="filter2_d_9_2" x="12.1281" y="16.2253" width="23.5204" height="28.4872" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="1" dy="2"/>
  <feGaussianBlur stdDeviation="0.8"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_2"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_2" result="shape"/>
  </filter>
  <linearGradient id="paint0_linear_9_2" x1="17.3983" y1="11.6805" x2="61.3158" y2="67.2029" gradientUnits="userSpaceOnUse">
  <stop offset="0.207595" stop-color="#F3A66F"/>
  <stop offset="0.961067" stop-color="#815246"/>
  </linearGradient>
  <linearGradient id="paint1_linear_9_2" x1="18.5052" y1="13.631" x2="59.6576" y2="65.5779" gradientUnits="userSpaceOnUse">
  <stop offset="0.126308" stop-color="#B47556"/>
  <stop offset="0.890017" stop-color="#9A5D4B"/>
  </linearGradient>
  <linearGradient id="paint2_linear_9_2" x1="41.6455" y1="16.2253" x2="41.6455" y2="45.8736" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFD6C2"/>
  <stop offset="1" stop-color="#E5A480"/>
  </linearGradient>
  <linearGradient id="paint3_linear_9_2" x1="22.8883" y1="16.2253" x2="22.8883" y2="41.1126" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFD6C2"/>
  <stop offset="1" stop-color="#E5A480"/>
  </linearGradient>
  <linearGradient id="paint4_linear_9_2" x1="43.298" y1="46.0703" x2="43.298" y2="63.1667" gradientUnits="userSpaceOnUse">
  <stop stop-color="#BA7154"/>
  <stop offset="1" stop-color="#6B4539"/>
  </linearGradient>
  <clipPath id="clip0_9_2">
  <rect width="69" height="73" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
  `,
  tasks: [
   {
    partners: 1,
    maxpartners: 1,
   },
   {
    deposit: 0,
    maxdeposit: 100,
   },
  ],
 },
 {
  level: 2,
  profit: 10,

  tasks: [
   {
    partners: 1,
    maxpartners: 2,
   },
   {
    deposit: 0,
    maxdeposit: 200,
   },
  ],
 },
 {
  level: 3,
  profit: 15,
  img: './assets/icons/dashboard/level-3.svg',
  tasks: [
   {
    partners: 1,
    maxpartners: 4,
   },
   {
    deposit: 0,
    maxdeposit: 1000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 50,
   },
  ],
 },
 {
  level: 4,
  profit: 20,
  img: './assets/icons/dashboard/level-4.svg',
  tasks: [
   {
    partners: 1,
    maxpartners: 8,
   },
   {
    deposit: 0,
    maxdeposit: 8000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 100,
   },
  ],
 },
 {
  level: 5,
  profit: 25,
  img: './assets/icons/dashboard/level-5.svg',
  tasks: [
   {
    partners: 1,
    maxpartners: 16,
   },
   {
    deposit: 0,
    maxdeposit: 40000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 400,
   },
  ],
 },
 {
  level: 6,
  profit: 30,
  img: './assets/icons/dashboard/level-6.svg',
  tasks: [
   {
    partners: 1,
    maxpartners: 24,
   },
   {
    deposit: 0,
    maxdeposit: 80000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 800,
   },
  ],
 },
 {
  level: 7,
  profit: 35,
  img: './assets/icons/dashboard/level-7.svg',
  tasks: [
   {
    partners: 1,
    maxpartners: 36,
   },
   {
    deposit: 0,
    maxdeposit: 160000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 1600,
   },
  ],
 },
 {
  level: 8,
  profit: 40,
  img: './assets/icons/dashboard/level-8.svg',
  tasks: [
   {
    partners: 1,
    maxpartners: 48,
   },
   {
    deposit: 0,
    maxdeposit: 320000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 3200,
   },
  ],
 },
 {
  level: 9,
  profit: 42.5,
  img: './assets/icons/dashboard/level-9.svg',
  tasks: [
   {
    partners: 1,
    maxpartners: 60,
   },
   {
    deposit: 0,
    maxdeposit: 640000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 6400,
   },
  ],
 },
 {
  level: 10,
  profit: 45,
  img: './assets/icons/dashboard/level-10.svg',
  tasks: [
   {
    partners: 1,
    maxpartners: 120,
   },
   {
    deposit: 0,
    maxdeposit: 1280000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 12800,
   },
  ],
 },
 {
  level: 11,
  profit: 47.5,
  img: './assets/icons/dashboard/level-11.svg',
  tasks: [
   {
    partners: 1,
    maxpartners: 240,
   },
   {
    deposit: 0,
    maxdeposit: 1280000 * 2,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 12800 * 2,
   },
  ],
 },
 {
  level: 12,
  img: './assets/icons/dashboard/level-12.svg',
  profit: 50,
 },
];

let currentLevel = levels[0];
let levelTasks = currentLevel.tasks;
const levelSlides = document.querySelectorAll('.dashboard__progress-slide');
const linkIcon = document.querySelector('.dashboard__invite-link-icon');
const linkCol = document.querySelector('.dashboard__invite-link-col.link');
const linkColFirst = document.querySelector('.dashboard__invite-link-col');

const defPercent = (value, value2) => {
 let percent = (value / value2) * 100;

 if ('Infinity' == percent) effect17.value = 'Неопределено';
 else if (percent == 0) return 5 + '%';
 else if (percent < 10) return 5 + '%';
 else return percent + '%';
};
const renderLevel = ({ level, profit, img }) => {
 const dashboardLevel = document.querySelector('.dashboard__level');
 dashboardLevel.className = `dashboard__level level-${level}`;
 const profitWrapper = document.querySelector(
  '.dashboard__level-profit-wrapper'
 );
 profitWrapper.innerHTML = `   
 
 <div class='dashboard__level-profit-logo level-${level}'>
 ${img ? img : ''}


 </div>
 <div class="dashboard__level-profit-info">
  <p class="dashboard__level-profit-level">Уровень ${level}</p>
  <p class="dashboard__level-profit-value">${profit}%</p>
 </div>`;
};

const renderTasks = (level, tasks) => {
 const tasksWrapper = document.querySelector('.dashboard__level-tasks');
 if (level.level != 12) {
  tasksWrapper.classList.remove('completed');
  tasksWrapper.innerHTML = `        <p class="dashboard__level-tasks-title">Задания</p>
           <div class="dashboard__level-progress"></div>`;
  const dashboardProgress = tasksWrapper.querySelector(
   '.dashboard__level-progress'
  );

  tasks.forEach((task, index) => {
   const progressWrapper = document.createElement('div');
   progressWrapper.className = 'dashboard__level-progress-wrapper';
   dashboardProgress.append(progressWrapper);
   const progressWrappers = document.querySelectorAll(
    '.dashboard__level-progress-wrapper'
   );

   switch (index) {
    case 0: {
     const currentWrapper = progressWrappers[index];
     currentWrapper.innerHTML = '';
     currentWrapper.innerHTML = `<div class="dashboard__level-progress-top-wrapper">
               <div class="dashboard__level-progress-title-wrapper">
                <p class="dashboard__level-progress-title">Количество партнеров</p>
               </div>
               <div class="dashboard__level-progress-amount-wrapper">
                <p class="dashboard__level-progress-amount ${
                 task.partners == task.maxpartners ? 'completed' : ''
                }">${task.partners}/${task.maxpartners}</p>
                <img
                 src="./assets/icons/dashboard/usdt-icon.svg"
                 alt=""
                 class="dashboard__level-progress-wallet-icon"
                />
               </div>
              </div>
              <div class="dashboard__level-progress-bar">
               <div class="dashboard__level-progress-bar-wrapper">
                <span></span>
               </div>
              </div>`;

     const progressBar = currentWrapper.querySelector(
      '.dashboard__level-progress-bar-wrapper'
     );
     progressBar.style.width = defPercent(task.partners, task.maxpartners);

     break;
    }
    case 1: {
     const currentWrapper = progressWrappers[index];
     currentWrapper.innerHTML = '';
     currentWrapper.innerHTML = `<div class="dashboard__level-progress-top-wrapper">
               <div class="dashboard__level-progress-title-wrapper">
               <p class="dashboard__level-progress-title">Сумма депозитов</p>
               <img
               src="./assets/icons/dashboard/usdt-icon.svg"
               alt=""
               class="dashboard__level-progress-wallet-icon"
              />
               </div>
               <div class="dashboard__level-progress-amount-wrapper">
                <p class="dashboard__level-progress-amount ${
                 task.deposit == task.maxdeposit ? 'completed' : ''
                }">${task.deposit}/${task.maxdeposit}</p>
                <img
                 src="./assets/icons/dashboard/usdt-icon.svg"
                 alt=""
                 class="dashboard__level-progress-wallet-icon"
                />
               </div>
              </div>
              <div class="dashboard__level-progress-bar">
               <div class="dashboard__level-progress-bar-wrapper">
                <span></span>
               </div>
              </div>`;
     const progressBar = currentWrapper.querySelector(
      '.dashboard__level-progress-bar-wrapper'
     );
     progressBar.style.width = defPercent(task.deposit, task.maxdeposit);
     break;
    }
    case 2: {
     const currentWrapper = progressWrappers[index];
     currentWrapper.innerHTML = '';
     currentWrapper.innerHTML = `<div class="dashboard__level-progress-top-wrapper">
               <div class="dashboard__level-progress-title-wrapper">
               <p class="dashboard__level-progress-title">Лидер в 1 линии уровня</p>
               
               <img
               src="./assets/icons/dashboard/level-${currentLevel.level}.svg"
               alt=""
               class="dashboard__level-progress-wallet-icon"
              />
              <span>${currentLevel.level}</span>
               </div>
               <div class="dashboard__level-progress-amount-wrapper">
                <p class="dashboard__level-progress-amount ${
                 task.leader == task.maxleader ? 'completed' : ''
                }">${task.leader}/${task.maxleader}</p>
               </div>
              </div>
              <div class="dashboard__level-progress-bar">
               <div class="dashboard__level-progress-bar-wrapper">
                <span></span>
               </div>
              </div>`;
     const progressBar = currentWrapper.querySelector(
      '.dashboard__level-progress-bar-wrapper'
     );
     progressBar.style.width = defPercent(task.leader, task.maxleader);
     break;
    }
    case 3: {
     const currentWrapper = progressWrappers[index];
     currentWrapper.innerHTML = '';
     currentWrapper.innerHTML = `<div class="dashboard__level-progress-top-wrapper">
               <div class="dashboard__level-progress-title-wrapper">
               <p class="dashboard__level-progress-title">Бонус к депозиту</p>
               <img
               src="./assets/icons/dashboard/usdt-icon.svg"
               alt=""
               class="dashboard__level-progress-wallet-icon"
              />
               </div>
               <div class="dashboard__level-progress-amount-wrapper">
                <p class="dashboard__level-progress-amount completed">${task.bonus}</p>
                <img
                 src="./assets/icons/dashboard/usdt-icon.svg"
                 alt=""
                 class="dashboard__level-progress-wallet-icon"
                />
               </div>
              </div>
              <div class="dashboard__level-progress-bar">
               <div class="dashboard__level-progress-bar-wrapper">
                <span></span>
               </div>
              </div>`;
     break;
    }
   }
  });
 } else {
  tasksWrapper.classList.add('completed');
  tasksWrapper.innerHTML = `        <div class="dashboard__level-completed">
<p class="dashboard__level-completed-title">Поздравляем!</p>
<p class="dashboard__level-completed-subtitle">«Теперь ты знаешь насколько 
    глубока кроличья нора»</p>
</div>`;
 }
};

const copyLink = (link) => {
 navigator.clipboard.writeText(link.textContent);
 linkColFirst.classList.add('copied');
};

renderLevel(currentLevel);

levelSlides.forEach((slide, index) => {
 slide.addEventListener('click', () => {
  currentLevel = levels[index - 2];
  levelTasks = currentLevel.tasks;
  renderLevel(currentLevel);

  renderTasks(currentLevel, levelTasks);
 });
});

renderTasks(currentLevel, levelTasks);

linkIcon.addEventListener('click', () => copyLink(linkCol));

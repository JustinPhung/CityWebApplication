/**
 * Created by jp on 08.12.15.
 */
cityApp.controller( 'generateCtrl', ['$scope', '$http', '$routeParams',
                                                  function ( $scope, $http, $routeParams ) {


                                                      $scope.generateCity= function(){


                                                          $http.post('../service/city/' + $scope.cityName  ).success( function ( data ) {

                                                              location.reload();

                                                          } );

                                                      }

                                                      $scope.generateLocation= function(){


                                                          $http.post('../service/location/create/'
                                                                    + $scope.locationName +'/'
                                                                    + $scope.locationCityId +'/'
                                                                    + $scope.locationStreet +'/'
                                                                    + $scope.locationPhonenumber +'/'
                                                                    + $scope.locationGPS +'/'
                                                                    + $scope.locationDescription +'/'
                                                                    + $scope.locationHousenumber ).success( function ( data ) {

                                                              location.reload();

                                                          } );

                                                      }

                                                      $scope.generatePost= function(){


                                                          $http.post('../service/location/'
                                                              + $scope.postUserId +'/'
                                                              + $scope.postLocationId +'/'
                                                              + $scope.postContent +'/').success( function ( data ) {

                                                              location.reload();

                                                          } );

                                                      }

                                                      $scope.likePost= function(){

                                                          $http.put('../service/event/'
                                                              + $scope.likeEventId + '/'
                                                              + $scope.likeUserId + '/', 'true').success( function ( data ) {

                                                              location.reload();
                                                          });

                                                      }


                                                      $scope.generateComment= function(){

                                                          $http.post('../service/comment/'
                                                              + $scope.commentEventId + '/'
                                                              + $scope.commentUserId).success( function ( data ) {

                                                              location.reload();
                                                          });
                                                      }

                                                      $scope.generateTag= function(){

                                                          $http.post('../service/tag/'
                                                              + $scope.tagName).success( function ( data ) {

                                                              location.reload();
                                                          });
                                                      }


                                                  }] );
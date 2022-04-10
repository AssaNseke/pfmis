<?php

/*
 * This file is part of jwt-auth.
 *
 * (c) Sean Tymon <tymon148@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tymon\JWTAuth\Validators;

use Tymon\JWTAuth\Claims\Collection;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class PayloadValidator extends Validator
{
    /**
     * The required claims.
     *
     * @var array
     */
    protected $requiredClaims = [
        'iss',
        'iat',
        'exp',
        'nbf',
        'sub',
        'jti',
    ];

    /**
     * The refresh TTL.
     *
     * @var int
     */
    protected $refreshTTL = 20160;

    /**
     * Run the validations on the payload array.
     *
     * @param  \Tymon\JWTAuth\Claims\Collection  $value
<<<<<<< HEAD
     *
=======
>>>>>>> develop
     * @return \Tymon\JWTAuth\Claims\Collection
     */
    public function check($value)
    {
        $this->validateStructure($value);

        return $this->refreshFlow ? $this->validateRefresh($value) : $this->validatePayload($value);
    }

    /**
     * Ensure the payload contains the required claims and
     * the claims have the relevant type.
     *
     * @param  \Tymon\JWTAuth\Claims\Collection  $claims
<<<<<<< HEAD
     *
     * @throws \Tymon\JWTAuth\Exceptions\TokenInvalidException
     *
     * @return void
=======
     * @return void
     *
     * @throws \Tymon\JWTAuth\Exceptions\TokenInvalidException
>>>>>>> develop
     */
    protected function validateStructure(Collection $claims)
    {
        if ($this->requiredClaims && ! $claims->hasAllClaims($this->requiredClaims)) {
            throw new TokenInvalidException('JWT payload does not contain the required claims');
        }
    }

    /**
     * Validate the payload timestamps.
     *
     * @param  \Tymon\JWTAuth\Claims\Collection  $claims
<<<<<<< HEAD
     *
     * @throws \Tymon\JWTAuth\Exceptions\TokenExpiredException
     * @throws \Tymon\JWTAuth\Exceptions\TokenInvalidException
     *
     * @return \Tymon\JWTAuth\Claims\Collection
=======
     * @return \Tymon\JWTAuth\Claims\Collection
     *
     * @throws \Tymon\JWTAuth\Exceptions\TokenExpiredException
     * @throws \Tymon\JWTAuth\Exceptions\TokenInvalidException
>>>>>>> develop
     */
    protected function validatePayload(Collection $claims)
    {
        return $claims->validate('payload');
    }

    /**
     * Check the token in the refresh flow context.
     *
     * @param  \Tymon\JWTAuth\Claims\Collection  $claims
<<<<<<< HEAD
     *
     * @throws \Tymon\JWTAuth\Exceptions\TokenExpiredException
     *
     * @return \Tymon\JWTAuth\Claims\Collection
=======
     * @return \Tymon\JWTAuth\Claims\Collection
     *
     * @throws \Tymon\JWTAuth\Exceptions\TokenExpiredException
>>>>>>> develop
     */
    protected function validateRefresh(Collection $claims)
    {
        return $this->refreshTTL === null ? $claims : $claims->validate('refresh', $this->refreshTTL);
    }

    /**
     * Set the required claims.
     *
     * @param  array  $claims
<<<<<<< HEAD
     *
=======
>>>>>>> develop
     * @return $this
     */
    public function setRequiredClaims(array $claims)
    {
        $this->requiredClaims = $claims;

        return $this;
    }

    /**
     * Set the refresh ttl.
     *
     * @param  int  $ttl
<<<<<<< HEAD
     *
=======
>>>>>>> develop
     * @return $this
     */
    public function setRefreshTTL($ttl)
    {
        $this->refreshTTL = $ttl;

        return $this;
    }
}
